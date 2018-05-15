import { Component, Input  } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { WebAuth} from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-backoffice-promotions',
    templateUrl: './backoffice-promotions.component.html',
    styleUrls: ['./backoffice-promotions.component.css']
})

export class BackOfficePromotionsComponent implements OnInit {
    @Input() auth: WebAuth;
    promotions: any = [];

    constructor(private apiService: ApiService ) {
    }

    ngOnInit() {
        this.fetchPromotions();
    }

    fetchPromotions() {
        this.apiService.fetchPromotions(this.auth).subscribe(promotions => {
            this.promotions = promotions;
        },  (result) => {
            alert(result.error.msg);
        });
    }

    submitPromotion(promotion){
        var data = {
            token: this.auth.token,
            promotion: promotion
        };

        console.log(data);

        this.apiService.createPromotion(data).subscribe(result=>{
            this.fetchPromotions();
        }, result=>{
            alert(result.error.msg);
        });
    }

    deletePromotion(promotion){
        promotion.auth = this.auth;
        this.apiService.deletePromotion(promotion).subscribe(result=>{
            this.fetchPromotions();
        }, result=>{
            console.log(result);
            alert(result.error.msg);
        });
    }
}
