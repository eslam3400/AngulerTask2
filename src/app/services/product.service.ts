import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];
  id: number = 0;

  add(_product: any) {
    _product.id = ++this.id;
    if (_product.cost != null)
      _product.cost = _product.quantity / _product.cost
    this.products.push(_product);
  }

  addQuantity(_productID: number, _quantity: number, _cost: number) {
    this.products.forEach(product => {
      if (product.id == _productID) {
        if (product.cost == null) product.cost = product.quantity = 0
        if (product.quantity == 0) product.cost = (_cost / _quantity);
        else product.cost = ((product.cost * product.quantity) + _cost) / (product.quantity + _quantity);
        product.quantity += _quantity
      }
    });
  }

  profitMargin() {

  }
}
