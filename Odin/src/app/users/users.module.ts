import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './Components/CreateUser/create-user.component';
import { DashboardComponent } from './Components/DashBoard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './Service/user.service';



@NgModule({
  declarations: [
    CreateUserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UserService
  ],
  exports:[
    CreateUserComponent,
    DashboardComponent
  ]
})
export class UsersModule { }
