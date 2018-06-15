import { Component, OnInit } from '@angular/core';
import { WrapperService } from '../wrapper/wrapper.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.styl']
})
export class ToolbarComponent implements OnInit {

  constructor(private wrapperService: WrapperService ) { }

  ngOnInit(): void {}

  goOut(): void {
  }

  sidenavToggle(): void {
    this.wrapperService.toggle();
  }

}
