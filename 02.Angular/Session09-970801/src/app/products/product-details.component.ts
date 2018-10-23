import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, Product } from './product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentProduct = new Product();
    this.currentProduct.productId = +this.route.snapshot.paramMap.get('id');
  }

}
