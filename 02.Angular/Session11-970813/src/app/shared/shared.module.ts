import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { ProductCodePipe } from './pipes/product-code.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersianDatePipe,
    ProductCodePipe,
    StarRatingComponent,
    HighlightDirective
  ],
  exports: [
    FormsModule,
    PersianDatePipe,
    ProductCodePipe,
    StarRatingComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
