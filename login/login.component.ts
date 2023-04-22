import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public myLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    let pwdPattern = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}'; 
    this.myLoginForm = formBuilder.group({      
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      password: ['', [Validators.required, Validators.pattern(pwdPattern)]],
    })
  }

  get m() {
    return this.myLoginForm.controls;
  }

  onSubmit() {
    console.log(this.myLoginForm.value);
    this.router.navigate(['registration']);
  }

  ngOnInit(): void {

  }
  
}
