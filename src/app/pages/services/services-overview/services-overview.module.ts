import { NgModule } from '@angular/core';

import {
  ServicesOverviewPageRoutingModule
} from './services-overview-routing.module';

import {
  ServicesOverviewPage
} from './services-overview.page';

@NgModule({
  imports: [
    ServicesOverviewPageRoutingModule,
    ServicesOverviewPage
  ]
})
export class ServicesOverviewPageModule {}