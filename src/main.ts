/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
