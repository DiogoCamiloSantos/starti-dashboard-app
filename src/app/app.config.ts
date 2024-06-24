import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppContext } from 'src/core/context/app-context';
import { loadingInterceptor } from '@services/interceptors/loading.interceptor';
import { LoadingDirective } from 'src/ui/directives/loading.directive';

export const appConfig: ApplicationConfig = {
  providers: [
    AppContext,


    
    provideRouter(routes),
    provideHttpClient(withInterceptors(
      [loadingInterceptor]
    )),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync()
  ]
};

