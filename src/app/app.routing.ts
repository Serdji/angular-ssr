import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '', canActivateChild: [MetaGuard], children: [
      {path: '', loadChildren: './home/home.module#HomeModule'},
      {path: 'about', loadChildren: './about/about.module#AboutModule'}
    ]
  },
  // 404
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
