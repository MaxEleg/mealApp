import { Component  } from '@angular/core';
import { Store } from '@ngrx/store';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { WebAuth} from '../../interfaces/index';
import { AppState } from '../../interfaces/index';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackOfficeComponent implements OnInit {
  auth: WebAuth;

  constructor(private apiService: ApiService, private store: Store<AppState> ) {
  }

  ngOnInit() {
    this.store.select( state  => state.auth).subscribe(( auth: WebAuth) => {
      this.auth = auth;
    });
  }

}
