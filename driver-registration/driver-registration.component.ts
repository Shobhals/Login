import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})


 
export class DriverRegistrationComponent implements OnInit {
  public myDriverRegistrationForm: Form | undefined;
  myDriverRegistration: any;

  constructor(formBuilder: FormBuilder,private router: Router) {
  
    this.myDriverRegistration = formBuilder.group({      
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      licenseno: ['',],
      licensevalidity : ['', [Validators.required, Validators.pattern('[]')]],
      contactno : ['Validators.required, Validators.pattern',[]],
   
    })
  }

  get m() {
    return this.myDriverRegistration.controls;
  }

  onSubmit() {
    console.log(this.myDriverRegistration.value);
    this.router.navigate(['TruckRegistration']);
  }

  ngOnInit(): void {

  }
  
}
