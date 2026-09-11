import { NgModule } from '@angular/core';

import {
  AutomationIntegrationPageRoutingModule
} from './automation-integration-routing.module';

import {
  AutomationIntegrationPage
} from './automation-integration.page';

@NgModule({
  imports: [
    AutomationIntegrationPageRoutingModule,
    AutomationIntegrationPage
  ]
})
export class AutomationIntegrationPageModule {}