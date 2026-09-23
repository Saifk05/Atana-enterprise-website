import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  IonicModule
} from '@ionic/angular/lazy';

import {
  AppDevelopmentPageRoutingModule
} from './app-development-routing.module';

import {
  AppDevelopmentPage
} from './app-development.page';

import {
  SharedModule
} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppDevelopmentPageRoutingModule,
    SharedModule
  ],

  declarations: [
    AppDevelopmentPage
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppDevelopmentPageModule {}