import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../../services/products.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _productService: ProductsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.productForm = this._form.group({
      Name: new FormControl,
      Type: new FormControl,
      Condition: new FormControl,
      Year: new FormControl
    })
  }

  onSubmit() {
    this._productService.createProduct(this.productForm.value).subscribe(data => {
      this._router.navigate(['/Products']);
    })
  }

}
