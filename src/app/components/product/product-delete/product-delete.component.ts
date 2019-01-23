import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  productEntityId: number
  productId: number

  ngOnInit() {
  }
    constructor(private _productService: ProductsService, private _ar: ActivatedRoute, private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._productService.getProduct(p.get('id')).subscribe((singleProduct: Product) => {
          this.product = singleProduct;
        })
      })
    }
    
    onDelete(id : number) {console.log()
      this._productService.deleteProduct(id).subscribe(() => {
        this._router.navigate(['/products']);
        
      })
    }
    
    
}
