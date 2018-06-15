
import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';
import {AppStorage} from '@shared/for-storage/universal.inject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public users: any;

  constructor(private http: TransferHttpService,
              @Inject(AppStorage) private appStorage: Storage,
              @Inject('ORIGIN_URL') public baseUrl: string) { }

  ngOnInit(): void {
    this.http.get(`${environment.urlApi}/user`).subscribe(value => {
      console.log(value);
      this.users = value;
    });
  }
}
