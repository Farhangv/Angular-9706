import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductDetailGuard implements CanActivate {

  constructor( private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('from guard');
      let productId = +next.paramMap.get('id');
      if(productId > 3)
        //this.router.navigate()
        return false;

      return true;
  }
}
