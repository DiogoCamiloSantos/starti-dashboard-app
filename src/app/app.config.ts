import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AppContext } from 'src/core/context/app-context';

export const appConfig: ApplicationConfig = {
  providers: [
    AppContext,

    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync()
  ]
};

