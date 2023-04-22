import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'driverRegistration', component: DriverRegistrationComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
