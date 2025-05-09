import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  ExtraOptions,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // enable anchor scrolling
  scrollPositionRestoration: 'enabled', // restores position when navigating back
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withRouterConfig(routerOptions)
    ),
    provideAnimations(),
    provideHttpClient(),
    // ...BOTPRESS_PROVIDERS,
  ],
};
