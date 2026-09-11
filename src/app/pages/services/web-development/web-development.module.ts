import { NgModule } from '@angular/core';

import {
  WebDevelopmentPageRoutingModule
} from './web-development-routing.module';

import {
  WebDevelopmentPage
} from './web-development.page';

@NgModule({
  imports: [
    WebDevelopmentPageRoutingModule,
    WebDevelopmentPage
  ]
})
export class WebDevelopmentPageModule {}