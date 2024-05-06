import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  constructor(private router: Router) { }

  goToKoushariPage() {
    this.router.navigate(['/koshari']);
  }
  goToPizzaImagePage() {
    this.router.navigate(['/pizza']);
  }
  goToshawrmaImagePage() {
    this.router.navigate(['/shawrma']);
  }

}
