import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {Meal, WebAuth, AppState} from '../../interfaces/index';
import * as AuthActions from '../../stores/auth/auth.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  cart: Meal[] = [];
  auth: WebAuth;

  constructor( private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.cart;
    }).subscribe((meals: Meal[]) => {
      this.cart = meals;
    });

    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
    });
  }

  logout() {
    this.store.dispatch(new AuthActions.LogOut());
  }

}
