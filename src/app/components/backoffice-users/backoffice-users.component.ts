import { Component, Input  } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { WebAuth} from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-backoffice-users',
  templateUrl: './backoffice-users.component.html',
  styleUrls: ['./backoffice-users.component.css']
})

export class BackOfficeUsersComponent implements OnInit {
  @Input() auth: WebAuth;
  users: any = [];
  device: string = environment.devise;

  constructor(private apiService: ApiService ) {
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.apiService.fetchUsers(this.auth).subscribe(users => {
      this.users = users;
    },  (result) => {
      alert(result.error.msg);
    });
  }

  showBanned(banned: boolean) {
    switch (banned) {
      case true:
        return 'Banni';
      case false:
        return 'Non banni';
      default: // case when there no more ingredient ...
        return 'Non banni';
    }
  }

  changeBanned(id: string) {
    this.apiService.changeBanned({ id, auth: this.auth }).subscribe(
      result => {
        this.fetchUsers();
      }, error => {
        console.log(error);
      });
  }
}
