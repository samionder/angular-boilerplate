import { Routes } from '@angular/router';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', loadChildren: './pages/home-page#HomePageModule' },
  { path: 'home', loadChildren: './pages/home-page#HomePageModule' },
  { path: '**', component: NoContentComponent },
];
