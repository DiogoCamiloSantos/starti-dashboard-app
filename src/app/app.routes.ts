import { Routes } from '@angular/router';
import path from 'path';
import { AuthGuard } from 'src/core/service/guards/auth-guard.service';
import { ArticleDetailComponent } from 'src/ui/pages/article/article-detail/article-detail.component';
import { ArticleFormComponent } from 'src/ui/pages/article/article-form/article-form.component';
import { ArticleListComponent } from 'src/ui/pages/article/article-list/article-list.component';
import { DashboardComponent } from 'src/ui/pages/dashboard/dashboard.component';
import { HomeComponentPage } from 'src/ui/pages/home/home-component.page';
import { LoginComponentPage } from 'src/ui/pages/login/login-component.page';

export namespace RoutesEnum {
    export enum Init {
      Home = "",
      Login = "login",
    }
  
    export enum Dashboard {
      Articles = "articles",
    }
   
    export enum Articles {
        Home = "",
        Edit = Dashboard.Articles + "edit/:id",
        Create = `${ "create"}`,
        Details = Dashboard.Articles + "details/:id",
    }
}

export const routes: Routes = [
  { path: 'login', component: LoginComponentPage },
  
  {
    path: "",
    component: HomeComponentPage,
    children: [
      { path: RoutesEnum.Init.Home, component: DashboardComponent },
      {
        path: RoutesEnum.Dashboard.Articles,
        component: ArticleListComponent,
        children: [
          { path: RoutesEnum.Articles.Details, component: ArticleDetailComponent },
          { path: RoutesEnum.Articles.Edit, component: ArticleFormComponent },
          { path: RoutesEnum.Articles.Create, component: ArticleFormComponent },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', redirectTo: '' },
];


  