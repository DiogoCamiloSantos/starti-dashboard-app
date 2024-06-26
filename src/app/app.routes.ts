import { Routes } from '@angular/router';
import { AuthGuard } from 'src/core/service/guards/auth-guard.service';
import { ArticleDetailComponent } from 'src/ui/pages/article/article-detail/article-detail.component';
import { ArticleFormComponent } from 'src/ui/pages/article/article-form/article-form.component';
import { ArticleListComponent } from 'src/ui/pages/article/article-list/article-list.component';
import { DashboardComponent } from 'src/ui/pages/dashboard/dashboard.component';
import { HomeComponentPage } from 'src/ui/pages/home/home-component.page';
import { LoginComponentPage } from 'src/ui/pages/login/login-component.page';

export const routes: Routes = [
    { path: 'login', component: LoginComponentPage },

    // { path: 'dashboard', component: DashboardComponent },
    { path: 'articles', component: ArticleListComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: 'edit-article/:id', component: ArticleFormComponent },
    { path: 'new-article', component: ArticleFormComponent },
    { path: 'login', component: LoginComponentPage },
    { path: 'home', component: HomeComponentPage },
    // { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
