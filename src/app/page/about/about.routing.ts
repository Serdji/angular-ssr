import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AboutComponent,
    data: {
      meta: {
        title: 'about title',
        override: true,
        description: 'about description'
      }
    },
  },
];

export const AboutRoutes = RouterModule.forChild(routes);
