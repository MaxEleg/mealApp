import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { User, WebAuth, Meal } from '../../interfaces';
import {RequestOptions} from '@angular/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    fetchMeals() {
        return this.http.get(environment.app_url + '/meals');
    }

    createAccount(newUser: User) {
        let urlRegister;
        urlRegister = environment.app_url + '/account/register';
        return this.http.post(urlRegister, newUser);
    }

    auth(data) {
        let urlLogin;
        urlLogin = environment.app_url + '/account/auth';
        return this.http.post(urlLogin, data);
    }

    proceedCheckout(data: { payment: any, auth: WebAuth, cart: Meal[]}) {
        let urlCheckout;
        urlCheckout = environment.app_url + '/order/checkout';
        return this.http.post(urlCheckout, data);
    }

    createPromotion(data: { promotion: {code:string, value: number}, token: string}) {
        let urlPromotion;
        urlPromotion = environment.app_url + '/admin/promotion?token=' + data.token;
        return this.http.post(urlPromotion, data);
    }

    fetchOrders(auth: WebAuth) {
        let urlCheckout;
        urlCheckout = environment.app_url + '/admin/orders/?token=' + auth.token;
        return this.http.get(urlCheckout);
    }

    fetchUsers(auth: WebAuth) {
        let urlUsers;
        urlUsers = environment.app_url + '/admin/users/?token=' + auth.token;
        return this.http.get(urlUsers);
    }

    fetchPromotions(auth: WebAuth) {
        let urlPromos;
        urlPromos = environment.app_url + '/admin/promotions/?token=' + auth.token;
        return this.http.get(urlPromos);
    }

    changeOrderStatus(data) {
        let urlCheckout;
        urlCheckout = environment.app_url + '/admin/order/changeStatus';

        const body = new HttpParams()
            .set(`token`, data.auth.token)
            .set(`id`, data.id)
            .set(`status`, data.status);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        data.token = data.auth.token;
        return this.http.post(urlCheckout, body, {
            headers: headers
        });
    }

    changeBanned(data) {
        let urlCheckout;
        urlCheckout = environment.app_url + '/admin/user/ban';

        const body = new HttpParams()
            .set(`token`, data.auth.token)
            .set(`id`, data.id)

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        data.token = data.auth.token;
        return this.http.post(urlCheckout, body, {
            headers: headers
        });
    }

    changeMeal(data) {
        let urlChangeMeal;
        urlChangeMeal = environment.app_url + '/admin/meal/'+ data.id;

        const body = new HttpParams()
            .set(`token`, data.auth.token)
            .set(`id`, data.id)
            .set(`price`, data.price)
            .set(`name`, data.name)
            .set(`description`, data.description);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        data.token = data.auth.token;
        return this.http.post(urlChangeMeal, body, {
            headers: headers
        });
    }

    deleteMeal(data) {
        let urlDeleteMeal;
        urlDeleteMeal = environment.app_url + '/admin/meal/' + data._id + '?token=' + data.auth.token;

        data.token = data.auth.token;
        return this.http.delete(urlDeleteMeal, data);
    }
}
