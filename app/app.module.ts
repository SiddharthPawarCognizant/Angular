import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-list/employee-info/employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginMovieComponent } from './login-movie/login-movie.component';
import { AuthInterceptorService } from './authinterceptor.service';
import { AuthMovieGuard } from './auth-movie.guard';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuantityIncrementComponent,
    QuantitySelectorComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveComponent,
    EditEmpFormBuilderComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    LoginComponent,
    UserComponent,
    MovieComponent,
    EditMovieComponent,
    CustomerListComponent,
    FavouriteComponent,
    LoginMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthMovieGuard],//[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}]
  bootstrap: [AppComponent]
})
export class AppModule { }
