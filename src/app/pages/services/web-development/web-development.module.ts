import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { WebDevelopmentPageRoutingModule } from './web-development-routing.module';

import { WebDevelopmentPage } from './web-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebDevelopmentPageRoutingModule
  ],
  declarations: [WebDevelopmentPage]
})
export class WebDevelopmentPageModule {}
