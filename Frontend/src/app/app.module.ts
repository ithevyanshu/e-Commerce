import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AddProductComponent } from './body/add-product/add-product.component';
import { UpdateProductComponent } from './body/update-product/update-product.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { CartDetailComponent } from './body/cart-detail/cart-detail.component';
import { OrderDetailComponent } from './body/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    CartDetailComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
