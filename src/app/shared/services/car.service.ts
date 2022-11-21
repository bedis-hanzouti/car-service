import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http :HttpClient) { }

  getAllCar(){
    return  this.http.get(`${environment.urlBackend}`+'/car')
   }

   getOneCar(id:String){
    return  this.http.get(`${environment.urlBackend}`+'/car')
   }
}
