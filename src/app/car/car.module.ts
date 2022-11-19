import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCarComponent } from './info-car/info-car.component';
import { MatriculeComponent } from './matricule/matricule.component';
import { CarRoutingModule } from './car-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';


@NgModule({
  declarations: [ MatriculeComponent,
    InfoCarComponent,
    RendezVousComponent],
  imports: [
    CarRoutingModule,
    CommonModule
  ]
})
export class CarModule { }
