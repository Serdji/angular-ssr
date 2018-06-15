import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import {HomeService} from './home.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    TranslateModule,
    MaterialModule
  ],
  providers: [HomeService],
  declarations: [HomeComponent]
})
export class HomeModule { }
