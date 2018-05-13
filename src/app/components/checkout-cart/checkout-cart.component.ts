import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import {AppState, Meal, WebAuth} from '../../interfaces/index';
import {Store} from '@ngrx/store';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {
  cart: Meal[];
  auth: WebAuth;
  total = 0;
  devise = environment.devise;
  showPayBtn = true;

  constructor(private apiService: ApiService, private store: Store<AppState> ) {
  }

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.cart;
    }).subscribe((meals: Meal[]) => {
      this.cart = meals;
      this.calcTotal();
    });
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
    });
  }

  calcTotal() {
    let total = 0;
    this.cart.forEach(meal => {
      total += meal.price;
    });
    this.total = total;
  }

  onSubmit(form) {

    if (!form.mail.length || !form.phone.length) {
      alert('Merci de saisir votre mail et numero de téléphone.');
      return;
    }

    this.showPayBtn = false;
    this.apiService.proceedCheckout({
      payment: form,
      auth: this.auth,
      cart: this.cart
    }).subscribe((result) => {
      console.log(result);
      this.showPayBtn = true;
    }, error => {
      console.log(error);
      this.showPayBtn = true;
    });
  }

}
