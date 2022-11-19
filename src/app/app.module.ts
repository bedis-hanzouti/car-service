import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { SteperComponent } from './steper/steper.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactComponent } from './contact/contact.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
   
    RendezVousComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Home2Component,
    SteperComponent,
    ContactComponent,
    LoginComponent,
   
  ],
  imports: [
    MatStepperModule,
    NgxIntlTelInputModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    
    FormsModule,
    NgbModalModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
   
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
