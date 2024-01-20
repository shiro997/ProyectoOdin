import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User, UserClient, UserEngineer, UserProvider, Usergeneral } from "src/app/core/model/UserModel";
import { SecurityService } from "src/app/security/Service/security-service.service";
import { UserService } from "../../Service/user.service";
import { CatalogService } from "src/app/core/service/catalog.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user!: User;
  token!: string;
  UserTypes = [];
  UserGeneral!: Usergeneral;
  UsrEn!: UserEngineer;
  UsrPd!: UserProvider;
  UsrCl!: UserClient;

  constructor(private security: SecurityService, private userService: UserService, private catalog: CatalogService, private route: Router) { }

  ngOnInit(): void {
    if (this.security.token == undefined || this.security.token == '') {
      this.route.navigateByUrl('/');
    } else {
      this.token = this.security.token;
      this.user = this.security.user;
    }
    this.catalog.getUserTypes().subscribe(response => {
      if (response) {
        this.UserTypes = response;
      }

      this.userService.getUserById(this.user._id).subscribe(response => {
        if (response) {
          this.UserGeneral = response;
        }
        this.detectUserType(this.UserTypes, this.UserGeneral);
      })
    }, error => {
      console.log(error);
    })



  }

  detectUserType(types: any[], user: Usergeneral) {
    types.forEach(t => {
      switch (t.Name) {
        case 'Engineer': {
          if (t._id == user.UserType) {
            this.UsrEn = new UserEngineer();
            this.UsrEn.isEngineer = true;
            this.UsrEn.Provider = user.Provider;
            this.UsrEn.Supports = user.Supports;
            this.UsrEn.Age = user.Age;
            this.UsrEn.Name = user.Name;
            this.UsrEn.UsrName = user.UsrName;
            this.UsrEn.Email = user.Email;
            this.UsrEn.ProfilePhoto = user.ProfilePhoto;
            this.UsrEn._id = user._id
          }
          break;
        }
        case 'Provider': {
          if (t._id == user.UserType) {
            this.UsrPd = new UserProvider();
            this.UsrPd.isProvider = true;
            this.UsrPd.Clients = user.Clients;
            this.UsrPd.Engineers = user.Engineers;
            this.UsrPd.Age = user.Age;
            this.UsrPd.Name = user.Name;
            this.UsrPd.UsrName = user.UsrName;
            this.UsrPd.Email = user.Email;
            this.UsrPd.ProfilePhoto = user.ProfilePhoto;
            this.UsrPd._id = user._id
          }
          break;
        }
        case 'Client': {
          if (t._id == user.UserType) {
            this.UsrCl = new UserClient();
            this.UsrCl.isClient = true;
            this.UsrCl.Providers = user.Clients;
            this.UsrCl.Supports = user.Engineers;
            this.UsrCl.Age = user.Age;
            this.UsrCl.Name = user.Name;
            this.UsrCl.UsrName = user.UsrName;
            this.UsrCl.Email = user.Email;
            this.UsrCl.ProfilePhoto = user.ProfilePhoto;
            this.UsrCl._id = user._id
          }
          break;
        }
      }
    })

  }
}