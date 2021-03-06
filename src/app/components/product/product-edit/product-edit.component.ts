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
  productEntityId: number;
  
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
      ProductId: new FormControl(this.product.productId),
      Name: new FormControl(this.product.name),
      Type: new FormControl(this.product.type),
      Condition: new FormControl(this.product.condition),
      Year: new FormControl(this.product.year),
    });
  }

  onSubmit(form) {console.log(form)
    const updateProduct: Product = {
      productId: form.value.ProductId,
      userId: form.value.UserId,
      name: form.value.Name,
      type: form.value.Type,
      condition: form.value.Condition,
      year: form.value.Year,
      userName: form.value.UserName,
    };
    console.log(updateProduct)
    this._productService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/products']);
    });
  }

}
