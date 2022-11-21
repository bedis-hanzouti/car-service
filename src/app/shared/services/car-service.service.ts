import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http :HttpClient) { }
  getAllService(){
    return  this.http.get(`${environment.urlBackend}`+'/service')
   }
   
   getOneService(id:String){
    return  this.http.get(`${environment.urlBackend}`+'/service/'+id)
   }
}
