import { NgModule } from '@angular/core';

import {
  DigitalTransformationPageRoutingModule
} from './digital-transformation-routing.module';

import {
  DigitalTransformationPage
} from './digital-transformation.page';

@NgModule({
  imports: [
    DigitalTransformationPageRoutingModule,
    DigitalTransformationPage
  ]
})
export class DigitalTransformationPageModule {}