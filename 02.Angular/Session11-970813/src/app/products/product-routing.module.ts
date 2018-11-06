import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../shared/guards/product-detail.guard';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';

const routes: Routes = [
  {path: 'products/create', component: ProductCreateComponent},
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
