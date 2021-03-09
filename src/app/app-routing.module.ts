import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoCrashComponent} from './todo-crash/todo-crash.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { EmployeeComponent } from './employee/employee.component';

const arr: Routes = [
  {path:'todo' ,component:TodoComponent},
  {path:'todocrash', component:TodoCrashComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:'employee', component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(arr)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
