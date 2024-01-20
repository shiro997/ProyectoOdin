import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateUserComponent } from './Components/CreateUser/create-user.component';
import { DashboardComponent } from './Components/DashBoard/dashboard.component';


const routes: Routes = [
  {path: 'create',component: CreateUserComponent},
  {path: 'edit/:id',component: CreateUserComponent},
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }