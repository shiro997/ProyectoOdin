import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService{
  env = environment;
  headers:HttpHeaders = new HttpHeaders({
    'Access-control-Allow-origin':'*',
    'content-type':'application/json'
  })

  constructor(private http:HttpClient){}

  getUserTypes():Observable<any>{
    let url = `${this.env.urlSecurity}/catalog/user-type`;
    return this.http.get<any>(url,{headers:this.headers});
  }
}