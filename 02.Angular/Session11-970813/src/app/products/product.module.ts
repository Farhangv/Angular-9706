import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../services/product.service';
import { ProductDetailGuard } from '../shared/guards/product-detail.guard';
import { ProductCreateComponent } from './product-create.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductCreateComponent
  ],
  providers:[ProductService,ProductDetailGuard]
})
export class ProductModule { }
