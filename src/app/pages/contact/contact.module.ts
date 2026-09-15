import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import {
  ContactPageRoutingModule
} from './contact-routing.module';

import {
  ContactPage
} from './contact.page';

import {
  SharedModule
} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ContactPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContactPageModule {}