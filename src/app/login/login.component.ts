import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../shared/services/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url!:String
  constructor(private router:Router,private route:ActivatedRoute) { 
    // if(this.authadminserv.isLogin){
      // this.router.navigate(['/admin'])
      //hedhi bech ki yabda connecté mayarja3ch lil page login 
    // }
    // if(!localStorage.getItem('token')){
    //   this.router.navigate(['/admin/login'])

    // }
    // if(this.authadminserv.loggedIn()==true){
    // console.log('connected');}
    // else{
    //   console.log('not connected');
    //   this.router.navigate(['/admin/login'])


    // }
    //authguard  2 methode
  }

  ngOnInit(): void {
    // this.url=this.route.snapshot.queryParams['returnUrl'] || '/admin/'
  }
  login(){
    this.router.navigate([this.url])
  }

}
