import { InjectionToken } from '@angular/core';

export interface AppConfig {
  customers: CustomersConfig;
  widgets: WidgetsConfig;
}

export interface CustomersConfig {
  enabled: boolean;
  url: string;
}

export interface WidgetsConfig {
  enabled: boolean;
  url: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('demo.app.config');

export const CUSTOMERS_CONFIG = new InjectionToken<CustomersConfig>(
  'demo.customers.config'
);

export const WIDGETS_CONFIG = new InjectionToken<WidgetsConfig>(
  'demo.widgets.config'
);
