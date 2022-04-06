import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];

  add(_product: any) {
    this.products.push(_product);
  }
}
