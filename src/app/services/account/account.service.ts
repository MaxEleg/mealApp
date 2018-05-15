import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment} from '../../../environments/environment';


@Injectable()
export class AccountService {
  url: String;

  constructor(private http: HttpClientModule) {}

  auth(): void {
  }
}
