import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  AutomationIntegrationPage
} from './automation-integration.page';

const routes: Routes = [
  {
    path: '',
    component: AutomationIntegrationPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AutomationIntegrationPageRoutingModule {}