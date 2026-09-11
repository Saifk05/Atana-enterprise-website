import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebDevelopmentPage } from './web-development.page';

const routes: Routes = [
  {
    path: '',
    component: WebDevelopmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDevelopmentPageRoutingModule {}
