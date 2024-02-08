import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { adminGuard } from './services/admin.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { AddProductComponent } from './body/add-product/add-product.component';
import { UpdateProductComponent } from './body/update-product/update-product.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { CartDetailComponent } from './body/cart-detail/cart-detail.component';
import { OrderDetailComponent } from './body/order-detail/order-detail.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: "full"
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'auth/signup',
    component:SignupComponent
  },
  {
    path:'admin/add-product',
    component:AddProductComponent,
    canActivate: [adminGuard]
  },
  {
    path:'admin/update-product/:id',
    component:UpdateProductComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'product-detail/:id',
    component:ProductDetailComponent,
  },
  {
    path: 'dashboard/view-cart',
    component:CartDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard/my-order',
    component:OrderDetailComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
