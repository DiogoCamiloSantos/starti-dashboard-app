import { Routes } from '@angular/router';
import { AuthGuard } from 'src/core/service/guards/auth-guard.service';
import { HomeComponentPage } from 'src/ui/pages/home/home-component.page';
import { LoginComponentPage } from 'src/ui/pages/login/login-component.page';

export const routes: Routes = [
    { path: '', component: HomeComponentPage, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponentPage },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
