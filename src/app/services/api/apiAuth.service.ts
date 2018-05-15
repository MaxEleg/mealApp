import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AccountService {
  token: String ;

  constructor(tkn: String) {
    this.token = tkn;
  }

}
