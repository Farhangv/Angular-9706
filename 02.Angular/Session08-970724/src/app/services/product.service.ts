import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private client: HttpClient) { }

  protected serverUrl: string = "http://localhost:3000/data";

  getAllProducts():Observable<IProduct[]>
  {
    return this.client.get<IProduct[]>(this.serverUrl);
  }

}
