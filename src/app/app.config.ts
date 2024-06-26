import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { loadingInterceptor } from '@services/interceptors/loading.interceptor';
import { AppContext } from 'src/core/context/app-context';
import { routes } from './app.routes';

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

