import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools} from '@ngrx/store-devtools';
import { studentsReducer } from './state/student.reduer';
import { StudentRedcord } from './state/student-record';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({
      name: 'StudentREcords',
      reducer:studentsReducer
    }),
    provideStoreDevtools[{maxAge:25,logonly:false}]
  ]
};
