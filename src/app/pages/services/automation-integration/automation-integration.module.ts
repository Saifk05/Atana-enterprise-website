import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { AutomationIntegrationPageRoutingModule } from './automation-integration-routing.module';

import { AutomationIntegrationPage } from './automation-integration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomationIntegrationPageRoutingModule
  ],
  declarations: [AutomationIntegrationPage]
})
export class AutomationIntegrationPageModule {}
