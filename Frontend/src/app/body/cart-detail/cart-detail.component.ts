import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {
  products: any

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService : OrderService
  ) {
    this.products = cartService.cart
  }

  total(product:any){
    return this.cartService.getProductTotal(product)
  }
  final(product) {
    return this.cartService.getProductFinal(product)
  }

  get cartTotal() : number {
    return this.cartService.getCartTotal()
  }

  get quantity() : number {
    return this.cartService.getTotalQuantity()
  }
  
  increase(product:any){
    return this.cartService.increaseQuantity(product)
  }
  
  decrease(product:any){
    return this.cartService.decreaseQuantity(product)
  }
  
  clear(product:any){
    return this.cartService.removeProduct(product)
  }

  clearCart(){
    this.products = []
    return this.cartService.clearCart()
  }

  placeOrder(){
    if(this.quantity>0){
      this.orderService.addOrder(this.products).subscribe(()=>{
        this.router.navigate(['dashboard/my-order'])
        this.clearCart()
      });
    }
  }
}
