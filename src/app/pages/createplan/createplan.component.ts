import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
interface Meal {
  name: string;
  image: string;
  type: string;
  rating: number; // Assuming 'rating' is a number representing the meal's rating
  ingredients: string[];
  following: boolean; // Add following property
  author: string; // Assuming each meal has an author
}

// Dummy meal data for testing
const dummyMeals: Meal[] = [
  {
    name: 'Scrambled Eggs',
    image: 'path_to_image/scrambled_eggs.jpg',
    type: 'Breakfast',
    ingredients: ['Eggs', 'Milk', 'Salt', 'Pepper'],
    rating: 4,
    following: false,
    author: 'Author B',
  },
  {
    name: 'Scrambled Eggs',
    image: 'path_to_image/scrambled_eggs.jpg',
    type: 'Breakfast',
    ingredients: ['Eggs', 'Milk', 'Salt', 'Pepper'],
    rating: 4,
    following: false,
    author: 'Author B',
  },
  {
    name: 'Scrambled Eggs',
    image: 'path_to_image/scrambled_eggs.jpg',
    type: 'Breakfast',
    ingredients: ['Eggs', 'Milk', 'Salt', 'Pepper'],
    rating: 4,
    following: false,
    author: 'Author B',
  },

  {
    name: 'Chicken Salad',
    image: 'path_to_image/chicken_salad.jpg',
    type: 'Lunch',
    ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Cucumber'],
    rating: 2,
    following: false,
    author: 'Author B',
  },
  {
    name: 'Spaghetti Bolognese',
    image: 'path_to_image/spaghetti_bolognese.jpg',
    type: 'Dinner',
    ingredients: ['Pasta', 'Ground Beef', 'Tomato Sauce', 'Onion'],
    rating: 5,
    following: false,
    author: 'Author B',
  },
];
@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrl: './createplan.component.css',
})
// Sample component class for CreatePlanComponent
export class CreatePlanComponent implements OnInit {
  breakfastMeals: Meal[];
  lunchMeals: Meal[];
  dinnerMeals: Meal[];

  constructor() {
    // Initialize the meals based on their types
    this.breakfastMeals = dummyMeals.filter(
      (meal) => meal.type === 'Breakfast'
    );
    this.lunchMeals = dummyMeals.filter((meal) => meal.type === 'Lunch');
    this.dinnerMeals = dummyMeals.filter((meal) => meal.type === 'Dinner');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addMealToCart(ingredients: string[]) {
    // Your logic for adding ingredients to the shopping cart
    console.log('Adding to cart:', ingredients);
  }
  toggleFollow(meal: Meal): void {
    // Toggle the following status
    meal.following = !meal.following;
  }
}
