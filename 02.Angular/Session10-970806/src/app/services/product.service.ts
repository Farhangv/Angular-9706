import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { Observable } from 'rxjs/Observable';
import { _throw } from "rxjs/observable/throw";
//import { throwError } from "rxjs"; //rxjs v6
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private client: HttpClient) { }

  protected serverUrl: string = "http://localhost:3000/data";

  getAllProducts():Observable<IProduct[]>
  {
    return this.client.get<IProduct[]>(this.serverUrl)
    .pipe(
      tap(response => console.log(response)),
      //map(data => { return data[0].productName }),
      //catchError(this.httpErrorHandler)
      catchError(
        (err) => {
          console.log(err.message);
          console.log(typeof err.error);
          console.log(err.error instanceof ErrorEvent);
          console.log(err.error.message);
          console.log(err.status);

          return _throw(err.message);
      })
    );
  }

  getProduct(id: number):Observable<IProduct>
  {
    return this.client.get<IProduct[]>(`${this.serverUrl}?productId=${id}`)
      .pipe(
        tap(data => console.log(data[0])),
        map(data => <IProduct>data[0])
        );
  }

  private httpErrorHandler(err: HttpErrorResponse)
  {
    console.log(err.message);
    return _throw(err);
  }

}
