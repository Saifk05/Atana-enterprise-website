import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { CaseStudiesPageRoutingModule } from './case-studies-routing.module';

import { CaseStudiesPage } from './case-studies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseStudiesPageRoutingModule
  ],
  declarations: [CaseStudiesPage]
})
export class CaseStudiesPageModule {}
