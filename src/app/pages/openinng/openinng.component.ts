import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openinng',
  templateUrl: './openinng.component.html',
  styleUrls: ['./openinng.component.css']
})
export class OpeninngComponent {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }

  goToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }
}
