import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'analytics', loadComponent: () => import('./analytics/analytics').then(m => m.Analytics) },
    { path: 'reports', loadComponent: () => import('./reports/reports').then(m => m.Reports) },
    { path: 'settings', loadComponent: () => import('./settings/settings').then(m => m.Settings) }
];
