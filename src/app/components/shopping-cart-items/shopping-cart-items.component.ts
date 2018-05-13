import { Component, Input  } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { Meal } from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import { Store } from '@ngrx/store';
import * as MealActions from '../../stores/cart/cart.actions';
import { environment} from '../../../environments/environment';

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.css']
})
export class ShoppingCartItemsComponent implements OnInit {
  @Input() cart: Meal[];
  total = 0;
  devise = environment.devise;

  constructor(private accountService: AccountService, private apiService: ApiService, private store: Store<AppState> ) {
    this.accountService = accountService;
  }

  ngOnInit() {
    this.calcTotal();
  }

  calcTotal() {
    let total = 0;
    this.cart.forEach(meal => {
      total += meal.price;
    });
    this.total = total;
  }

  removeToBasket(at) {
    this.store.dispatch(new MealActions.RemoveMeal(at));
    this.calcTotal();
  }

  removeBasket() {
    this.store.dispatch(new MealActions.RemoveAll());
  }

}
