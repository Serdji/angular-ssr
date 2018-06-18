import { Injectable } from '@angular/core';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';
import {environment} from '../../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http: TransferHttpService) { }

  getUsers() {
    return this.http.get(`${environment.urlApi}/user`);
  }

  getCities() {
    return this.http.get(`${environment.urlApi}/city`);
  }

}
