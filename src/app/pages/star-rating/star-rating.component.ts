import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() maxRating: number = 5; // Maximum rating value
  @Input() currentRating: number = 0; // Current rating value
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>(); // Event emitter for rating click
  stars: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize stars array based on maxRating
    this.stars = Array(this.maxRating).fill(0).map((_, index) => index + 1);
  }

  setRating(rating: number): void {
    // Emit event with the selected rating
    this.ratingClicked.emit(rating);
  }
}
