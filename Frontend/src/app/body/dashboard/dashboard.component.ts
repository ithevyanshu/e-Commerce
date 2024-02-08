import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedOption: string;
  products: any
  customProducts:any
  count: number
  p = 1

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router,
  ) {
    productService.getProduct().subscribe((data) => {
      this.products = data
      this.customProducts = this.products
      this.count = this.customProducts.length      
    })
  }

  isEmpty(){
    return this.count==0
  }
  
  isAdmin() {
    if (this.isUserActive && this.authService.isAdmin()) {
      return true
    }
    return false
  }
  
  get isUserActive(): boolean {
    return this.authService.isLoggedIn();
  }
  
  delete(Id: string) {
    this.productService.deleteProduct(Id).subscribe((data) => {
      window.location.reload();
    });
  }  
  
  update(Id: string) {
    this.router.navigate([`admin/update-product/${Id}`])
  }
  
  search(data: any) {
    if (data.option == "choose" && data.name=="") {
      this.customProducts = this.products
      this.count = this.customProducts.length      
    }
    else if(data.option == "choose" && data.name!=""){
      this.customProducts = this.products.filter((product: any) => product.productName == data.name);
      this.count = this.customProducts.length      
    }
    else if(data.option != "choose" && data.name==""){
      this.customProducts = this.products.filter((product: any) => product.category == data.option);
      this.count = this.customProducts.length      
    }
    else {
      this.customProducts = this.products.filter((product: any) => product.category == data.option && product.productName == data.name);
      this.count = this.customProducts.length      
    }
  }
  
  ngOnInit() {
    this.selectedOption = 'choose';
  }

  gotoDetail(){
    this.router.navigate([''])
  }
}
