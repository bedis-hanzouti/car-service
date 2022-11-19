import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';

import { LoginComponent } from './login/login.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { SteperComponent } from './steper/steper.component';

const routes: Routes = [
  {
    path:'rdv',component:RendezVousComponent
  },
 
  {
    path:'',component:Home2Component
  },
  {
    path:'log',component:LoginComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'step',component:SteperComponent
  },
 
  {path:'car',
  loadChildren:() =>import('./car/car-routing.module').then(m => m.CarRoutingModule)
    // path:'mat',component:MatriculeComponent
  },
  {
    path:'**', redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
