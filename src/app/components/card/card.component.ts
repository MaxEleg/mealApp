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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  meals: Meal[] = [];
  devise = environment.devise;

  constructor(private accountService: AccountService, private apiService: ApiService, private store: Store<AppState> ) {
    this.accountService = accountService;
  }

  ngOnInit() {
    this.apiService.fetchMeals().subscribe((meals: Meal[]) => {
      this.meals = meals;
    }, error => {
      console.log(error);
    });
  }

  addMealToBasket(meal: Meal) {
    this.store.dispatch(new MealActions.AddMeal(meal));
  }

}
