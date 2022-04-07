import { ProductService } from './../../services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.sass']
})
export class EditProductModalComponent {
  @Input() productID: any;

  editProductForm = new FormGroup({
    cost: new FormControl(null),
    quantity: new FormControl(null),
  });

  constructor(private productService: ProductService) { }

  editProduct() {

  }
}
