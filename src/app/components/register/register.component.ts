import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import {User, AppState, WebAuth} from '../../interfaces';

import * as AuthActions from '../../stores/auth/auth.actions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors: any[] = [];
  auth: WebAuth;

  constructor(private apiService: ApiService,  private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
    });
  }

  onSubmit(form) {
    const newUser: User = form;

    this.errors = [];
    if (form.password !== form.confirmPassword) {
      this.errors.push({msg : 'Le mot de passe de confirmation est inccorect.'});
      return;
    }
    newUser.birthDate = new Date(form.birthYear, form.birthMonth - 1, form.birthDay).getTime();

    this.apiService.createAccount(newUser).subscribe((result: WebAuth) => {
      this.store.dispatch(new AuthActions.LoginIn(result));
    }, result => {
      if (Array.isArray(result.error)) {
        this.errors = result.error;
      } else {
        this.errors = [result.error];
      }
    });
  }
}
