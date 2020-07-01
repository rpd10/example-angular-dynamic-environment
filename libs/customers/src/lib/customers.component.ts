import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  CustomersConfig,
  CUSTOMERS_CONFIG,
} from '@example-angular-dynamic-environment/config';

@Component({
  selector: 'example-angular-dynamic-environment-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {
  constructor(@Inject(CUSTOMERS_CONFIG) public config: CustomersConfig) {}
}
