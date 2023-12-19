/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'rxjs';

import '@angular/localize/init';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
