import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: WidgetsComponent },
    ]),
  ],
  declarations: [WidgetsComponent],
})
export class WidgetsModule {}
