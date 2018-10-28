import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductCodePipe } from './shared/pipes/product-code.pipe';
import { PersianDatePipe } from './shared/pipes/persian-date.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductDetailGuard } from './shared/guards/product-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductCodePipe,
    PersianDatePipe,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome' , component: WelcomeComponent},
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
      {path: 'products', component: ProductListComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'}
    ])
  ],
  providers: [ProductService, ProductDetailGuard],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
