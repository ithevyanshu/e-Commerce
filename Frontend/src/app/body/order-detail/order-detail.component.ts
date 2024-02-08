import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  orders: Order[] = []
  isEmpty: boolean = false

  constructor(
    private router: Router,
    private orderService: OrderService
  ) {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;      
      if (this.orders.length != 0) {
        this.isEmpty = true;
      }      
    });
  }
  

}
