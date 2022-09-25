import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  profileAdmin = {
    username: '',
    role: '',
  };
  isLogin: boolean = false;
  helper = new JwtHelperService();
  
  decodeToken:any

  token:any=localStorage.getItem('token')
  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')
  headerAll=new HttpHeaders()
  .set('authorization',this.token)


  constructor(private http :HttpClient) { }
  saveDataUser(token: any, username: any, role: any) {
    // localStorage.setItem('token',token)
    // this.profileAdmin.username=username,
    // this.profileAdmin.role=role
    // this.isLogin=true
    this.token=token
    this.decodeToken= this.helper.decodeToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }
  getUsername() {

    return this.helper.decodeToken(this.token).username;
  }

  loggedIn(){
    if(!this.token){
      return false
    }
    let tokenDecode=this.helper.decodeToken(this.token)
    if(!localStorage.getItem('token')){
      return false

    }
    if(tokenDecode.role!=='User'){
      return false
    }
    if(this.helper.isTokenExpired(this.token)){
      return false
    }
    return true

  }

  getALLUser(){
   return  this.http.get(`${environment.urlBackend}`+'/student',{headers:this.headerAdmin,params:this.params})
  }

  logout(){
    localStorage.clear();
  }
}
