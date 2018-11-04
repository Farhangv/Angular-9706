import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
