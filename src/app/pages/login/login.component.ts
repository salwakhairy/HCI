import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from '../signup/signup.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: LoginModel  = new LoginModel();
  constructor(private router: Router,private toastr: ToastrService){}


  onLogin() {
    debugger;
    const localUsers =  localStorage.getItem('angular17users');
    if (this.loginObj.name=='' || this.loginObj.password==''){
      this.toastr.error('Please fill in all the fields', 'Error');
    }
    else if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.name == this.loginObj.name && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        this.toastr.success("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/home');
      } else {
        this.toastr.error("No User Found");
      }
    }
  }

}


export class LoginModel  { 
  name: string;
  password: string;

  constructor() {
    this.name = ""; 
    this.password= ""
  }
}
