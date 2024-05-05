import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals = new BehaviorSubject<any[]>([]);
  meals$ = this.meals.asObservable();

  private shoppingCart = new BehaviorSubject<any[]>([]);
  cart$ = this.shoppingCart.asObservable();

  addToMeals(meal: any) {
    const currentMeals = this.meals.value;
    this.meals.next([...currentMeals, meal]);
  }

  addToCart(ingredient: any) {
    const currentCart = this.shoppingCart.value;
    this.shoppingCart.next([...currentCart, ingredient]);
  }
}
