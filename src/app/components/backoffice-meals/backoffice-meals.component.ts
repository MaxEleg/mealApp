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
    editMeal: any = {};
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
    setEdit(meal){
        this.editMeal =  Object.assign({}, meal);
    }

    editSubmit(data){
        data.auth = this.auth;
        data.price = data.price.toString().replace(',','.');
        this.apiService.changeMeal(data).subscribe(result=>{
            this.fetchMeals();
        }, result=>{
            alert(result.error.msg);
        });
    }

    deleteMeal(meal){
        meal.auth = this.auth;
        this.apiService.deleteMeal(meal).subscribe(result=>{
            this.fetchMeals();
        }, result=>{
            console.log(result);
            alert(result.error.msg);
        });
    }

    newSubmit(newMeal){

        newMeal.price = newMeal.price.toString().replace(',','.');

        var data = {
            meal: newMeal,
            token: this.auth.token
        };

        this.apiService.createMeal(data).subscribe(result=>{
            alert('Votre plat à bien été ajouté !');
            this.fetchMeals();
        }, result=>{
            console.log(result);
            alert(result.error.msg);
        });
    }
}
