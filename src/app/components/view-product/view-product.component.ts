import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductServices } from '../../services/services.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private productService: ProductServices) {}

  ngOnInit(): void {}

  @Input() product!: product;
  @Output() cancelViewProduct: EventEmitter<void> = new EventEmitter<void>();

  cancel() {
    this.cancelViewProduct.emit();
  }
}
