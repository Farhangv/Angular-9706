import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct, Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../shared/pages-with-table.css']
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    console.log('Product List Initiated!');
    this.filteredProducts = this.products;
  }
  pageTitle = 'لیست محصولات';
  imageWidth = 60;
  _filterPhrase = '';
  set filterPhrase(filter:string){
    this._filterPhrase = filter;
    this.perfomFilter(filter);
  }
  get filterPhrase():string{
    return this._filterPhrase;
  }

  showImage:boolean = true;
  filteredProducts: IProduct[];
  products: IProduct[] = [

    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "2016/03/16",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "2016/03/18",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "2018/09/10",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "2017/01/23",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "2016/05/02",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
  constructor() { }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  perfomFilter(filter: string): void {
    this.filteredProducts = this.products.filter(
      (product: IProduct) => {
        return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
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
}
