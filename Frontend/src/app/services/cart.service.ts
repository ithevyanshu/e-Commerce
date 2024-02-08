import { Injectable } from '@angular/core';
import { Product } from '../product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  increaseQuantity(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    }
  }

  decreaseQuantity(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = Math.max(existingProduct.quantity - 1, 1);
    }
  }

  removeProduct(product: Product) {
    const index = this.cart.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getProductTotal(product: Product): number {
    return product.quantity * product.price;
  }

  getProductFinal(product: Product): number {
    return product.quantity * product.finalPrice;
  }

  getTotalQuantity(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }

  getCartTotal(): number {
    return this.cart.reduce((total, product) => total + (product.quantity * product.finalPrice), 0);
  }

  clearCart() {
    this.cart = [];
  }

}
