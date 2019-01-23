import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/services/products.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _productService: ProductsService, private _form: FormBuilder, public snackBar: MatSnackBar, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.productForm = this._form.group({
      Name: new FormControl,
      Type: new FormControl,
      Condition: new FormControl,
      Year: new FormControl,
    })
  }

  onSubmit() {
    console.log(this.productForm.value)
    this._productService.createProduct(this.productForm.value).subscribe(data => {
      console.log(data)
      this._router.navigate(['/products']);
      console.log(data);
      debugger;
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000, });
  }
}
