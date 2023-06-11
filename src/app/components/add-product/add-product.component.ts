import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { product } from '../../models/product.model';
import { ProductServices } from '../../services/services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private fb: FormBuilder, private productservices : ProductServices) {}

  productForm = this.fb.group({
    productName: '',
    description: '',
    category: '',
    brand: '',
    expiredDate: '',
    manufacturedDate: '',
    batchNumber: '',
    unitPrice: '',
    quantity: '',
  });

  ngOnInit(): void {}

  isDataUploading = false;
  @Output() cancelAddView: EventEmitter<void> = new EventEmitter<void>();

  onSubmit() {
    const values = this.productForm.value as unknown as product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productservices.addProduct(values as product).subscribe((res) => {
      debugger;
      this.isDataUploading = false;
      this.productForm.reset();
    })
  }

  cancel() {
    this.cancelAddView.emit();
  }
}
