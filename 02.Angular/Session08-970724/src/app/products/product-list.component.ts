import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../shared/pages-with-table.css']
})
export class ProductListComponent implements OnInit {
  showImage:boolean = true;
  filteredProducts: IProduct[];
  products: IProduct[];
  pageTitle = 'لیست محصولات';
  imageWidth = 60;
  ratingText = '';
  _filterPhrase = '';
  set filterPhrase(filter:string){
    this._filterPhrase = filter;
    this.perfomFilter(filter);
  }
  get filterPhrase():string{
    return this._filterPhrase;
  }

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    console.log('Product List Initiated!');
    //this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      data =>
      {
        this.products = data;
        this.filteredProducts = this.products;
      }
    );
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  perfomFilter(filter: string): void {
    this.filteredProducts = this.products.filter(
      (product: IProduct) => {
        return product.productName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1;
    });
    /*
    this.filteredProducts = this.products.filter(
      function(product: IProduct) {
        return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
    });
    */
  }

  /*
  applyFilterText(product: IProduct, filter: string):boolean
  {
    return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
  }
  */

 ratingClickHandler(eventText: string)
 {
  this.ratingText = eventText;
 }
}
