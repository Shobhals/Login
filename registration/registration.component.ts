import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  public myForm: FormGroup;
  myRegistrationForm: any;
  myDriverRegistration: any;

  constructor(private formBuilder: FormBuilder) {
    let email = '[A-za-z0-9._%+-]+@[A-za-z0-9.-]+.[A_za-z]{2,3}$';
    this.myForm = formBuilder.group({      
      mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      lname: ['', [Validators.required, Validators.pattern('[A-Za-z]{0,20}$')]],
      email: ['', [Validators.required, Validators.pattern(email)]],
      gender: ['', Validators.required],
      city:[''],
      hobbies: ["",]
    })
  }

  get m() {
    return this.myRegistrationForm.controls;
  }

  onSubmit() {
    console.log(this.myDriverRegistration);
  }

  ngOnInit(): void {

  }
  
} 
