import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpIntercepterBasicAuth } from './service/http/http-intercepter-basic-auth'; // IMPORT

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuth, multi: true },
    provideHttpClient(withInterceptorsFromDi())
  ]
};
