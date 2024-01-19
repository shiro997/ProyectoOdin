import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SecurityRoutingModule } from './security-routing.module';




@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports:[
    LogInComponent
  ]
})
export class SecurityModule { }
