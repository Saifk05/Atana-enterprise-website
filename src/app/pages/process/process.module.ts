import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ProcessPageRoutingModule
} from './process-routing.module';

import {
  ProcessPage
} from './process.page';

import {
  SharedModule
} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProcessPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ProcessPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProcessPageModule {}