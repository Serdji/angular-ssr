import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {MaterialModule} from '../../material.module';
import {TableExampleComponent} from '@shared/tablet-example/table-example.component';
import {DialogComponent} from '@shared/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    WrapperComponent,
    TableExampleComponent,
    DialogComponent
  ]
})
export class LayoutsModule {
}
