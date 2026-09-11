import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  SeoPage
} from './seo.page';

const routes: Routes = [
  {
    path: '',
    component: SeoPage
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
export class SeoPageRoutingModule {}