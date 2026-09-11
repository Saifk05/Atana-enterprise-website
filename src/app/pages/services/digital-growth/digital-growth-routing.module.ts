import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  DigitalGrowthPage
} from './digital-growth.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalGrowthPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DigitalGrowthPageRoutingModule {}