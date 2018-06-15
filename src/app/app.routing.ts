import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import {WrapperComponent} from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
      {path: 'home', loadChildren: './page/home/home.module#HomeModule'},
      {path: 'about', loadChildren: './page/about/about.module#AboutModule'}
    ]
  },
  // 404
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
