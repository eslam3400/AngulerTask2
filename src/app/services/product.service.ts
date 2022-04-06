import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];
  id: number = 0;

  add(_product: any) {
    _product.id = ++this.id;
    this.products.push(_product);
  }
}
