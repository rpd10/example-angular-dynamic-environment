import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  AppConfig,
  APP_CONFIG,
} from '@example-angular-dynamic-environment/config';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch(environment.configurationUrl, { cache: 'no-cache' })
  .then((response): Promise<AppConfig> => response.json())
  .then((json) => {
    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: json }])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });
