import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.sass']
})
export class AddProductModalComponent {
  addProductForm = new FormGroup({
    name: new FormControl(null),
    price: new FormControl(null),
    img: new FormControl(null),
    cost: new FormControl(null),
    quantity: new FormControl(null),
  });

  uploadedImgUrl: any;

  constructor(private ProductService: ProductService, private router: Router) { }

  addProduct() {
    if (this.addProductForm.value.cost != null || this.addProductForm.value.quantity != null) {
      if (this.addProductForm.value.cost == null || this.addProductForm.value.quantity == null) {
        alert("please make sure to enter both cost and quantity");
        return;
      }
    }
    this.ProductService.add({
      name: this.addProductForm.value.name,
      cost: this.addProductForm.value.cost,
      price: this.addProductForm.value.price,
      quantity: this.addProductForm.value.quantity,
      img: this.uploadedImgUrl
    })
    this.addProductForm.reset();
    this.uploadedImgUrl = null;
    document.getElementById('add-product-modal-close')?.click();
  }

  onImgUpload(e: any) {
    const files = e.target.files;
    if (files.length === 0)
      return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.uploadedImgUrl = reader.result;
    }
  }
}
