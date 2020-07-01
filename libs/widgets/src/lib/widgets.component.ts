import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  WidgetsConfig,
  WIDGETS_CONFIG,
} from '@example-angular-dynamic-environment/config';

@Component({
  selector: 'example-angular-dynamic-environment-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsComponent {
  constructor(@Inject(WIDGETS_CONFIG) public config: WidgetsConfig) {}
}
