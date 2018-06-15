import { AboutRoutes } from './about.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import {DashComponent} from '../../components/dash/dash.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutes,
    TranslateModule,
    MaterialModule,
  ],
  declarations: [
    AboutComponent,
    DashComponent
  ]
})
export class AboutModule { }
