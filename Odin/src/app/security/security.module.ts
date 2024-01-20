import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SecurityRoutingModule } from './security-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SecurityService } from './Service/security-service.service';




@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    SecurityService
  ],
  exports:[
    LogInComponent
  ]
})
export class SecurityModule { }
