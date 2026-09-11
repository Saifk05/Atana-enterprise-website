import { NgModule } from '@angular/core';

import {
  AppDevelopmentPageRoutingModule
} from './app-development-routing.module';

import {
  AppDevelopmentPage
} from './app-development.page';

@NgModule({
  imports: [
    AppDevelopmentPageRoutingModule,
    AppDevelopmentPage
  ]
})
export class AppDevelopmentPageModule {}