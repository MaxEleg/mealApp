import { Component, Input  } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { WebAuth} from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-backoffice-orders',
  templateUrl: './backoffice-orders.component.html',
  styleUrls: ['./backoffice-orders.component.css']
})

export class BackOfficeOrdersComponent implements OnInit {
  @Input() auth: WebAuth;
  orders: any = [];
  device: string = environment.devise;

  constructor(private apiService: ApiService ) {
  }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.apiService.fetchOrders(this.auth).subscribe(orders => {
      this.orders = orders;
    },  (result) => {
      alert(result.error.msg);
    });
  }

  cleanStatus(status: string) {
    switch (status) {
      case 'WAITING':
        return 'En attente';
      case 'READY':
        return 'Prête';
      case 'ERROR': // case when there no more ingredient ...
        return 'Commande impossible à réaliser...';
    }
  }

  changeStatus(id: string, status: string) {
    this.apiService.changeOrderStatus({ id, status, auth: this.auth }).subscribe(
      result => {
        this.fetchOrders();
      }, error => {
        console.log(error);
      });
  }
}
