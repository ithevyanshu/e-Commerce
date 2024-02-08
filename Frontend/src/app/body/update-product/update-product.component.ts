import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  productOld : any

  constructor(private productService : ProductService, private router : Router, private route : ActivatedRoute){
    this.route.params.subscribe(params => {
      const id= params['id'];
      productService.getProductbyID(id).subscribe((data)=>{
        this.productOld = data;
        this.product.patchValue({
          productName: this.productOld.productName,
          description: this.productOld.description,
          category: this.productOld.category,
          quantity: this.productOld.quantity,
          image: this.productOld.image,
          price: this.productOld.price,
          discount: this.productOld.discount,
          specification: this.productOld.specification
        });
      })
    });  
  }

  product = new FormGroup({
    productName: new FormControl(""),
    description: new FormControl(""),
    category: new FormControl(""),
    quantity: new FormControl(""),
    image: new FormControl(""),
    price: new FormControl(""),
    discount: new FormControl(""),
    specification: new FormControl(""),
  })

  onSubmit(){
    if(this.product.valid){
      this.productService.updateProduct(this.productOld.id,[
        this.product.value.productName,
        this.product.value.description,
        this.product.value.category,
        this.product.value.quantity,
        this.product.value.image,
        this.product.value.price,
        this.product.value.discount,
        this.product.value.specification
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
