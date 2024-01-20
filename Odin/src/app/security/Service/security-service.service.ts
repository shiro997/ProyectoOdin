import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  token:string = '';

  user!:User;

  headers:HttpHeaders = new HttpHeaders({
    'Access-control-Allow-origin':'*',
    'content-type':'application/json'
  })

  env = environment;

  constructor(private http:HttpClient) { }

  login(data:LoginRequest):Observable<any>{
    let url = this.env.urlSecurity+'/login';
    var body = JSON.stringify(data);
    return this.http.post<any>(url,body,{headers:this.headers});
  }
}
