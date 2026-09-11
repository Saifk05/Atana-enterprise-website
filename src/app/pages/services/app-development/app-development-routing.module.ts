import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  AppDevelopmentPage
} from './app-development.page';

const routes: Routes = [
  {
    path: '',
    component: AppDevelopmentPage
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
export class AppDevelopmentPageRoutingModule {}