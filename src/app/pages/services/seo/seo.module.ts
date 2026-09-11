import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { SeoPageRoutingModule } from './seo-routing.module';

import { SeoPage } from './seo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeoPageRoutingModule
  ],
  declarations: [SeoPage]
})
export class SeoPageModule {}
