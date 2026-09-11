import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(m => m.HomePageModule)
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services-overview/services-overview.module')
        .then(m => m.ServicesOverviewPageModule)
  },
  {
    path: 'work',
    loadChildren: () =>
      import('./pages/work/case-studies/case-studies.module')
        .then(m => m.CaseStudiesPageModule)
  },
  {
    path: 'process',
    loadChildren: () =>
      import('./pages/process/process.module')
        .then(m => m.ProcessPageModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module')
        .then(m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module')
        .then(m => m.ContactPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}