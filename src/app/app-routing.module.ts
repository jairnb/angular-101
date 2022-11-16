import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsComponent } from './forms/forms.component';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'images', component: ImageComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
