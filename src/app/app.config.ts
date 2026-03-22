import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppContext } from 'src/core/context/app-context';
import { fakeBackendProvider } from 'src/core/service/interceptors/fake-backend.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    AppContext,
    fakeBackendProvider,

    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};

