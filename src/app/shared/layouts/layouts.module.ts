import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SidenavComponent } from './sidenav/sidenav.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    WrapperComponent
  ]
})
export class LayoutsModule {
}
