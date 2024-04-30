import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Import Validators for default validation
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, this.emailFormatValidator]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
      c_password: ['', Validators.required]
    });
  }

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    const name = this.signUpForm.value.name;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    const c_password = this.signUpForm.value.c_password;
  
    if (!name || !email || !password || !c_password) {
      this.toastr.error('Please fill in all the fields', 'Error');
      return;
    }
  
    if (password !== c_password) {
      this.toastr.error('Password and Confirm Password do not match', 'Error');
      return;
    }
  
    // Check if the password is weak (less than 8 characters or without both uppercase and lowercase letters)
    if (!/(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      this.toastr.error('Password is too weak. Please choose a stronger password.', 'Error');
      return;
    }
  
    // Check if the email format is invalid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.toastr.error('Invalid email format', 'Error');
      return;
    }
  
    let users = localUser != null ? JSON.parse(localUser) : [];
    users.push({ name, email, password, c_password });
    localStorage.setItem('angular17users', JSON.stringify(users));
    this.toastr.success('Registration Success', 'Success');
    
    this.router.navigateByUrl('/login');
  }
  


  passwordStrengthValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!/(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(control.value)) {
      return { 'passwordWeak': true };
    }
    return null;
  }

  emailFormatValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)) {
      return { 'invalidEmailFormat': true };
    }
    return null;
  }
}
