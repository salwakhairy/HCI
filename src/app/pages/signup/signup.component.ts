import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpObj:SignUpModel =new SignUpModel();
  constructor(private router: Router,private toastr: ToastrService){}
onRegister() {
  debugger;
  const localUser = localStorage.getItem('angular17users');
  if (this.signUpObj.password !== this.signUpObj.c_password) {
    this.toastr.error('Password and Confirm Password do not match', 'Error');
  }
  if (this.signUpObj.name=='' || this.signUpObj.email=='' || this.signUpObj.password=='' || this.signUpObj.c_password=='') {
    this.toastr.error('Please fill in all the fields', 'Error');
  } 
  else if(localUser != null) {
    const users =  JSON.parse(localUser);
    users.push(this.signUpObj);
    localStorage.setItem('angular17users', JSON.stringify(users))
    this.toastr.success('Registration Success', 'Success');
  } else  {
    const users = [];
    users.push(this.signUpObj);
    localStorage.setItem('angular17users', JSON.stringify(users))
    this.toastr.success('Registration Success', 'Success');
  }
}
}

 export class SignUpModel  {
  name: string;
  email: string;
  password: string;
 c_password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= "";
    this.c_password=""
  }
}
