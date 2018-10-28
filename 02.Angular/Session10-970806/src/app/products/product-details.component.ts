import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: IProduct;

  constructor(private route: ActivatedRoute,
    private service: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.service.getProduct(+this.route.snapshot.paramMap.get('id'))
      .subscribe(data => this.currentProduct = data);
      //.subscribe(function(data) {
      //  console.log(data);
      //  this.currentProduct = new Product();
      //  console.log(this.currentProduct.productName);
      //});
  }

  goBack(){
    this.router.navigate(['/products']);
  }

}
