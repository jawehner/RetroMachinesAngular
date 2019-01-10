import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  
  editProductForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _productService: ProductsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._productService.getProduct(p.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
        this.createForm();
      })
    })
    }

  ngOnInit() {
  }

  createForm() {
    this.editProductForm = this._form.group({
      ProductName: new FormControl(this.product.Name),
      Type: new FormControl(this.product.Type),
      Condition: new FormControl(this.product.Condition),
      Year: new FormControl(this.product.Year)
    });
  }

  onSubmit(form) {
    const updateProduct: Product = {
      UserId: form.value.UserId,
      Name: form.value.Name,
      Type: form.value.Type,
      Condition: form.value.Condition,
      Year: form.value.Year
    };
    this._productService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/products']);
    });
  }

}
