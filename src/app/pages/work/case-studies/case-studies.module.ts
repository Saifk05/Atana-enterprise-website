import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';

import {
  CaseStudiesPageRoutingModule
} from './case-studies-routing.module';

import {
  CaseStudiesPage
} from './case-studies.page';

import {
  SharedModule
} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CaseStudiesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    CaseStudiesPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CaseStudiesPageModule {}