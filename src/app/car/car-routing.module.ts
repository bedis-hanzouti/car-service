import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCarComponent } from './info-car/info-car.component';
import { MatriculeComponent } from './matricule/matricule.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mat'
 },
 {
  path:'rendezvous',component:RendezVousComponent
},
  {
     path:'mat',component:MatriculeComponent
  },
  {
     path:'infocar',component:InfoCarComponent
  },
 
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
