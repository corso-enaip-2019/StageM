import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path: 'department',component:DepartmentComponent},
  {path: 'employee',component:EmployeeComponent},
  {path:'',
   redirectTo:'/employee',
   pathMatch:'full'
  }
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentComponent,EmployeeComponent]
