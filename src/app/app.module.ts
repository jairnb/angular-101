import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TextComponent,
    EmployeeComponent,
    FormsComponent,
    NavbarComponent,
    ProductComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
