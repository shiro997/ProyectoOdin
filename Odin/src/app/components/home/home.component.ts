import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/UserModel';
import { SecurityService } from 'src/app/security/Service/security-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private security:SecurityService){
    
  }

  ngOnInit(): void {
    
  }
}