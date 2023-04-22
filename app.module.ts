import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { ValidationComponent } from './validation/validation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TruckRegistrationComponent } from './truck-registration/truck-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    // ValidationComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DriverRegistrationComponent,
    SidebarComponent,
    TruckRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
 

   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

