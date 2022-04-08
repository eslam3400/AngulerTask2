import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  filteredProducts: any;
  name: any;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.resetProducts();
  }

  resetProducts() {
    this.filteredProducts = this.ProductService.products;
  }

  filterItem(value: string) {
    if (!value) {
      this.resetProducts();
    }
    this.filteredProducts = Object.assign([], this.ProductService.products).filter(
      (product: any) => product.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }
}
