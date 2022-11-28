import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const myRoute:Routes=[
  {
    path:"",
    component:EmployeeLoginComponent
  },
  {
    path:"alogin",
    component:AdminLoginComponent
  },

{
  path:"add",
  component:AddComponent
},
{
  path:"view",
  component:ViewComponent
},
{
  path:"search",
  component:SearchComponent
},
{
  path:"delete",
  component:DeleteComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    AdminLoginComponent,
    AddComponent,
    DeleteComponent,
    ViewComponent,
    SearchComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
