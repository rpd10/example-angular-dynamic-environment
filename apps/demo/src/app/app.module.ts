import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import {
  AppConfig,
  APP_CONFIG,
  CustomersConfig,
  CUSTOMERS_CONFIG,
  WidgetsConfig,
  WIDGETS_CONFIG,
} from '@example-angular-dynamic-environment/config';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

export function customersConfigFactory(config: AppConfig): CustomersConfig {
  return config.customers;
}

export function widgetsConfigFactory(config: AppConfig): WidgetsConfig {
  return config.widgets;
}

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@example-angular-dynamic-environment/home').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('@example-angular-dynamic-environment/customers').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('@example-angular-dynamic-environment/widgets').then(
        (m) => m.WidgetsModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: CUSTOMERS_CONFIG,
      useFactory: customersConfigFactory,
      deps: [APP_CONFIG],
    },
    {
      provide: WIDGETS_CONFIG,
      useFactory: widgetsConfigFactory,
      deps: [APP_CONFIG],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
