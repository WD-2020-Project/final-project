import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductChangeComponent } from './products/product-change/product-change.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductChangeComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
