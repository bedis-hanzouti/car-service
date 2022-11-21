import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCarComponent } from './info-car/info-car.component';
import { MatriculeComponent } from './matricule/matricule.component';
import { CarRoutingModule } from './car-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { FormlyModule } from '@ngx-formly/core';
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
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SteperComponent } from '../steper/steper.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatriculeComponent,
    InfoCarComponent,
    RendezVousComponent,
    SteperComponent,

    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent
  ],
  imports: [
    CarRoutingModule,
    CommonModule,
    MatStepperModule,

    FormlyBootstrapModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    RouterModule,

    FormsModule,
    NgbModalModule,

    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
})
export class CarModule {}
