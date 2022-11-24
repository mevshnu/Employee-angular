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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    AdminLoginComponent,
    AddComponent,
    DeleteComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
