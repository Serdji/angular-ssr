
import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public users: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe(value => {
      this.users = value;
    });
  }
}
