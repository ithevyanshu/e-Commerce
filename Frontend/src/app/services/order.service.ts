import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { Product } from '../product';
import { Order } from '../order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = []

  baseUrl: string = 'https://localhost:7085/api/Order';
  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private cartService: CartService, private productService : ProductService) { }

  addOrder(order: Product[]) {
    const orderRequests = order.map(element => {
      const requestBody = {
        id : "",
        orderDate : "",
        userId: this.loadCurrentUser(),
        productId: element.id,
        productName: element.name,
        image: element.image,
        price: this.cartService.getProductFinal(element).toString(),
        quantity: element.quantity,
      };
      this.productService.updateQuantity(requestBody.productId,requestBody.quantity).subscribe((data)=>{
        // console.log(data);
      })
      this.orders.push(requestBody);
      return requestBody;
    });
    // console.log(this.orders);
    return this.http.post(`${this.baseUrl}/order-placed`, orderRequests, { responseType: 'text' });
  }
  
  getOrders() {
    return this.http.get(`${this.baseUrl}/user-order/${this.loadCurrentUser()}`);
  }

  loadCurrentUser() {
    const token = localStorage.getItem('access_token')
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null
    return userInfo.id
  }
}
