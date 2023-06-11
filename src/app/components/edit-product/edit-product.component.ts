import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductServices } from '../../services/services.service';


@Component({ 
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(private productService: ProductServices) {}
  @Input() product!: product;
  @Output() editProductEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEditView: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    
  }

  cancel() {
    this.cancelEditView.emit();
  }
  
  isDataUploading = false;

  onSubmit() {
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe((res) => {
      this.isDataUploading = false;
      this.editProductEvent.emit();
      this.cancelEditView.emit();
    })
  }

}
