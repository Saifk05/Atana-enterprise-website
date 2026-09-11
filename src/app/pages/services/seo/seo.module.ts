import { NgModule } from '@angular/core';

import {
  SeoPageRoutingModule
} from './seo-routing.module';

import {
  SeoPage
} from './seo.page';

@NgModule({
  imports: [
    SeoPageRoutingModule,
    SeoPage
  ]
})
export class SeoPageModule {}