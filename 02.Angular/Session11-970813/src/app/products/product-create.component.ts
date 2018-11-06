import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: IProduct = new Product();
  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit() {
  }

  submitProduct(){
    console.log(this.product);

    this.productService.addProduct(this.product).subscribe();
    this.router.navigate(['/products'])
  }
}
