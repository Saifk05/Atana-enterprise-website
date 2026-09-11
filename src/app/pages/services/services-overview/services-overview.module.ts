import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ServicesOverviewPageRoutingModule } from './services-overview-routing.module';

import { ServicesOverviewPage } from './services-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesOverviewPageRoutingModule
  ],
  declarations: [ServicesOverviewPage]
})
export class ServicesOverviewPageModule {}
