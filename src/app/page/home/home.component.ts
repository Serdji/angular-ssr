
import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {HomeService} from './home.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit, OnDestroy {

  public users: any;
  public cities: any;
  public isTableCard: boolean = false;
  public isLoader: boolean = false;
  private isActive: boolean = true;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.initUsers();
    this.initCities();
  }

  private initUsers() {
    this.homeService.getUsers()
      .pipe( takeWhile( _ => this.isActive ))
      .subscribe(value => {
        this.users = value;
    });
  }

  private initCities() {
    this.isTableCard = true;
    this.isLoader = true;
    this.homeService.getCities()
      .pipe(takeWhile( _ => this.isActive ))
      .subscribe(value => {
        this.cities = value;
        this.isLoader = false;
    });
  }

  ngOnDestroy() {
    this.isActive = false;
  }

}
