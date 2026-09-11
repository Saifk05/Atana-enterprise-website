import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { DigitalGrowthPageRoutingModule } from './digital-growth-routing.module';

import { DigitalGrowthPage } from './digital-growth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalGrowthPageRoutingModule
  ],
  declarations: [DigitalGrowthPage]
})
export class DigitalGrowthPageModule {}
