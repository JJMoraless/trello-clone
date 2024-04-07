import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), OverlayModule],
};