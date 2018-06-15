import { Component, OnInit, ViewChild } from '@angular/core';
import { IMenuLink } from '../../../interface/imenu-link';
import { MatSidenav } from '@angular/material/sidenav';
import { WrapperService } from '../wrapper/wrapper.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent implements OnInit {

  @ViewChild( 'sidenav' ) sidenav: MatSidenav;

  public links: IMenuLink[] = [
    { url: '/home', title: 'Home' },
    { url: '/about', title: 'About' },
  ];

  constructor(private wrapperService: WrapperService ) { }

  ngOnInit(): void {
    this.timeoutCloseNav();
    this.wrapperService.subjectToggle.subscribe( _ => this.sidenav.toggle() );
  }

  private timeoutCloseNav() {
    timer( this.getSeconds( 3 ) ).subscribe( _ => this.sidenav.close() );
  }

  private getSeconds( sec: number ): number {
    return sec * 1000;
  }




}
