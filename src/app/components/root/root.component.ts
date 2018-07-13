import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, Meal, WebAuth } from '../../interfaces';
import * as MealActions from '../../stores/cart/cart.actions';
import * as AuthActions from '../../stores/auth/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  loadCartItems() {
    // We initiate cart store from last save
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(cartItems)) {
      cartItems.forEach((meal: Meal) => {
        this.store.dispatch(new MealActions.AddMeal(meal));
      });
    }
  }

  loadWebAuth() {
    // We initiate auth store from last save
    const authItem: WebAuth = JSON.parse(localStorage.getItem('authItem'));
    if (authItem && authItem.isAuth) {
      this.store.dispatch(new AuthActions.LoginIn(authItem));
    }else{
      this.store.dispatch(new AuthActions.LogOut());
    }
  }

  ngOnInit() {

    this.loadCartItems();
    this.loadWebAuth();
  }
}
