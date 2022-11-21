import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCarComponent } from './info-car/info-car.component';
import { MatriculeComponent } from './matricule/matricule.component';
import { CarRoutingModule } from './car-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { NgStepperModule } from 'angular-ng-stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';



@NgModule({
  declarations: [ MatriculeComponent,
    InfoCarComponent,
    RendezVousComponent,
    
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent],
  imports: [
    BrowserAnimationsModule,
   
    CommonModule,
    ReactiveFormsModule,
    CarRoutingModule,
    NgStepperModule,
    CdkStepperModule,
    FormsModule,
    MatStepperModule,
   
    FormlyBootstrapModule,
    
    MatFormFieldModule,
    MatInputModule,
   
    BrowserModule,
    RouterModule,
    
    
    NgbModalModule,
     
  
   
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ]
})
export class CarModule { }
