import { NgModule } from '@angular/core';

import {
  DigitalGrowthPageRoutingModule
} from './digital-growth-routing.module';

import {
  DigitalGrowthPage
} from './digital-growth.page';

@NgModule({
  imports: [
    DigitalGrowthPageRoutingModule,
    DigitalGrowthPage
  ]
})
export class DigitalGrowthPageModule {}