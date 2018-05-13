import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { Meal } from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import { Store } from '@ngrx/store';
import * as MealActions from '../../stores/cart/cart.actions';
import { environment} from '../../../environments/environment';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Meal[] = [];
  devise = environment.devise;

  constructor(private accountService: AccountService, private apiService: ApiService, private store: Store<AppState> ) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.cart;
    }).subscribe((meals: Meal[]) => {
      this.cart = meals;
    });
  }

}
