import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductServices } from '../../services/services.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductServices) {}

  ngOnInit(): void {
    this.getProducts(); 
  }

  public products: product[] = [];

  public rowIndex!: number;
  ShowAddProduct!: boolean;
  ViewProduct!: boolean;
  EditProduct!: boolean;
  isLoading: boolean = false;
  selectedProduct!: product;

  hideAddProducts() {
    this.ShowAddProduct = false;
  }

  closeViewProducts() {
    this.ViewProduct = false
  }
 
  closeEditView() {
    this.EditProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  public selectProduct(selectedRow: any, product : product){
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }
  
  updateProductList() {
    this.getProducts();
  }

  OpenEditProductView() {
    if (this.ShowAddProduct) {
      this.ShowAddProduct = false;
    }
    if (this.ViewProduct) {
      this.ViewProduct = false;
    }
    this.EditProduct = true;
  }

  OpenViewProducts() {
    if (this.ShowAddProduct) {
      this.ShowAddProduct = false;
    }
    if (this.EditProduct) {
      this.EditProduct = false;
    }
    this.ViewProduct = true;
  }

  OpenShowAddProduct() {
    if (this.EditProduct) {
      this.EditProduct = false;
    }
    if (this.ViewProduct) {
      this.ViewProduct = false;
    }
    this.ShowAddProduct = true;
  }

}
