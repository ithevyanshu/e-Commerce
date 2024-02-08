import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient) { }
  baseUrl : string = 'https://localhost:7085/api/Product';

  addProduct(product : string[]){
    const requestBody = {
      Id : '',
      ProductName : product[0],
      Description : product[1],
      Category : product[2],
      Quantity : product[3],
      Image : product[4],
      Price : product[5],
      Discount : product[6],
      Specification : product[7]
    }

    return this.http.post(`${this.baseUrl}/add-product`,requestBody, { responseType : 'text'})
  }

  getProduct(){
    return this.http.get(`${this.baseUrl}/get-product`)
  }

  getProductbyID(Id : string){
    return this.http.get(`${this.baseUrl}/get-product/${Id}`)
  }

  updateProduct(Id : string, product : string[]){
    const requestBody = {
      Id : Id,
      ProductName : product[0],
      Description : product[1],
      Category : product[2],
      Quantity : product[3],
      Image : product[4],
      Price : product[5],
      Discount : product[6],
      Specification : product[7]
    }
    return this.http.put(`${this.baseUrl}/edit-product/${Id}`,requestBody, {responseType : 'text'})
  }

  updateQuantity(Id: string, quantity: number){
    return this.http.patch(`${this.baseUrl}/update-quantity/${Id}?quantity=${quantity}`, {responseType : 'text'})
  }

  deleteProduct(Id :string){
    return this.http.delete(`${this.baseUrl}/delete/${Id}`)
  }
}
