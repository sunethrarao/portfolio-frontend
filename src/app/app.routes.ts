import { Routes } from '@angular/router';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PortfolioHomeComponent,
  },
];
