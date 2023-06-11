import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [{path : 'product-details' , component: ViewProductComponent},
{path : 'add-product' , component: AddProductComponent}, {path : 'edit-product' , component: EditProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
