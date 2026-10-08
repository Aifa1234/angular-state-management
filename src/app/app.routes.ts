import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';

import { Dashboard } from './dashboard/dashboard';
import { AuthGuard } from './shared/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canMatch: [AuthGuard],
    },
];