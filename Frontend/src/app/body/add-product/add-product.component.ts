import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productService : ProductService, private router : Router, private http : HttpClient){}
  select = "select"
  isValid : boolean = false
  displayMsg : string = ""
  
  product = new FormGroup({
    productName: new FormControl("", [(Validators.required),(Validators.maxLength(50))]),
    description: new FormControl("", [(Validators.required),(Validators.minLength(50))]),
    category: new FormControl(this.select, [(Validators.required)]),
    quantity: new FormControl("", [(Validators.required)]),
    image: new FormControl("", [(Validators.required)]),
    price: new FormControl("", [(Validators.required)]),
    discount: new FormControl(""),
    specification: new FormControl(""),
  })
  
  onSubmit(value){
    if(value){
      this.displayMsg = "*Fill required fields"
    }
    else{
      const discount = this.product.value.discount || "0"
      const specification = this.product.value.specification || "0"
      this.productService.addProduct([
        this.product.value.productName,
        this.product.value.description,
        this.product.value.category,
        this.product.value.quantity,
        this.product.value.image,
        this.product.value.price,
        discount,
        specification
      ])
      .subscribe((res)=>{
        // console.log(res);
        this.router.navigate([''])
      })
    }
  }

  get Name() : FormControl{
    return this.product.get("productName") as FormControl;
  }
  get Description() : FormControl{
    return this.product.get("description") as FormControl;
  }
  get Category() : FormControl{
    return this.product.get("category") as FormControl;
  }
  get Quantity() : FormControl{
    return this.product.get("quantity") as FormControl;
  }
  get Image() : FormControl{
    return this.product.get("image") as FormControl;
  }
  get Price() : FormControl{
    return this.product.get("price") as FormControl;
  }
  get Discount() : FormControl{
    return this.product.get("discount") as FormControl;
  }
  get Specification() : FormControl{
    return this.product.get("specification") as FormControl;
  }
}
