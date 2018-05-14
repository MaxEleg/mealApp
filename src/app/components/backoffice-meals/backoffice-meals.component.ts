import { Component, Input  } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { WebAuth} from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-backoffice-meals',
    templateUrl: './backoffice-meals.component.html',
    styleUrls: ['./backoffice-meals.component.css']
})

export class BackOfficeMealsComponent implements OnInit {
    @Input() auth: WebAuth;
    meals: any = [];
    device: string = environment.devise;

    constructor(private apiService: ApiService ) {
    }

    ngOnInit() {
        this.fetchMeals();
    }

    fetchMeals() {
        this.apiService.fetchMeals().subscribe(meals => {
            this.meals = meals;
        },  (result) => {
            alert(result.error.msg);
        });
    }

    changeBanned(id: string) {
        this.apiService.changeBanned({ id, auth: this.auth }).subscribe(
            result => {
                this.fetchMeals();
            }, error => {
                console.log(error);
            });
    }
}
