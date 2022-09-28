import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

const routes: Routes = [
  {
    path:'rdv',component:RendezVousComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',component:Home2Component
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
