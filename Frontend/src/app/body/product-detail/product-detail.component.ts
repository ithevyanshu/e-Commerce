import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any
  finalPrice: number
  price: number
  isClicked = false
  button = "Add to Cart"
  isLogin: boolean = false
  isAdmin: boolean = false

  cartProduct: Product = {
    id : "",
    name :"",
    image : "",
    quantity : 0,
    price : 0,
    finalPrice : 0,
    discount : 0
  }

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLogin = authService.isLoggedIn()
    this.isAdmin = authService.isAdmin()
    this.route.params.subscribe(params => {
      const id = params['id'];
      productService.getProductbyID(id).subscribe((data) => {
        this.product = data
        if (this.product.discount != 0) {
          this.finalPrice = this.product.finalPrice
          this.price = this.product.price
        }
        else {
          this.finalPrice = this.product.price
          this.price = this.product.finalPrice
        }
        this.cartProduct.id = this.product.id
        this.cartProduct.name = this.product.productName,
        this.cartProduct.image = this.product.image,
        this.cartProduct.price = this.product.price,
        this.cartProduct.finalPrice = this.product.finalPrice,
        this.cartProduct.discount = this.product.discount
      })
    });
  }

  onClick() {
    if (this.isClicked == false) {
      this.isClicked = true
      this.button = "Goto Cart"
      this.cartProduct.quantity = 1
      this.cartService.addToCart(this.cartProduct)
    }
    else {
      this.router.navigate(['dashboard/view-cart'])
    }
  }
  delete(Id: string) {
    this.productService.deleteProduct(Id).subscribe(() => {
      this.router.navigate([''])
    })
  }
  update(Id: string){
    this.router.navigate([`admin/update-product/${Id}`])
  }
}
