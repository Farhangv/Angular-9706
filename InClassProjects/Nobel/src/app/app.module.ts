import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PersianDatePipe } from './shared/pipes/persian-date.pipe';
import { PrizeMainComponent } from './prizes/prize-main/prize-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersianDatePipe,
    PrizeMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
