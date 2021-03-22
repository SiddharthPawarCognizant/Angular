import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import {EditEmpTemplateDrivenComponent} from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-list/employee-info/employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginMovieComponent } from './login-movie/login-movie.component';
import { AuthMovieGuard } from './auth-movie.guard';

const routes: Routes = [

  {path:'',component:ViewEmpComponent},
{path:'viewEmp',component:ViewEmpComponent},
{path:'editEmp',component:EditEmpComponent},
{path:'QI',component:QuantityIncrementComponent},
{path:'QS',component:QuantitySelectorComponent},
{path:'EETD',component:EditEmpTemplateDrivenComponent},
{path:'reactive/:id',component:EditEmpReactiveComponent,canActivate:[AuthGuard]},
{path:'builder',component:EditEmpFormBuilderComponent},
{path:'list',component:EmployeeListComponent},
{path:'info',component:EmployeeInfoComponent},
{path:'login',component:LoginComponent},
{path:'user',component:UserComponent},
{path:'movie',component:MovieComponent,canActivate:[AuthMovieGuard]},//canActivate:[AuthGuard]
{path:'editmovie/:id',component:EditMovieComponent},
{path:'customer',component:CustomerListComponent},
{path:'fav',component:FavouriteComponent},
{path:'loginmovie',component:LoginMovieComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
