import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/core/service/guards/auth-guard.service';
import { HomeComponentPage } from '../pages/home/home-component.page';
import { LoginComponentPage } from '../pages/login/login-component.page';


const routes: Routes = [
    { path: '', component: HomeComponentPage, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponentPage },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }