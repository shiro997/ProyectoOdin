import { Component } from '@angular/core';
import { SecurityService } from '../../Service/security-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  frmLogIn:FormGroup;

  constructor(private securityService:SecurityService,private frmBuilder:FormBuilder,private route:Router){
    this.frmLogIn = this.frmBuilder.group({
      Email: ['',Validators.required],
      Password:['',Validators.required]
    })
  }

  login(){
    if(this.frmLogIn.valid){
      let data : LoginRequest = this.frmLogIn.value;
      this.securityService.login(data).subscribe(response =>{
        if(response){
          this.securityService.token = response.Token;
          this.securityService.user = response.User;
          this.route.navigateByUrl('/dashboard');
        }
      })
    }
  }
}
