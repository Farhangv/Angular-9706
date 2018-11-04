import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../shared/guards/product-detail.guard';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailsComponent
  },
  {path: 'products', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

}
