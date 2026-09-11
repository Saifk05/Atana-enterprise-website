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
    path: 'services/app-development',
    loadChildren: () =>
      import('./pages/services/app-development/app-development.module')
        .then(m => m.AppDevelopmentPageModule)
  },

  {
    path: 'services/digital-transformation',
    loadChildren: () =>
      import('./pages/services/digital-transformation/digital-transformation.module')
        .then(m => m.DigitalTransformationPageModule)
  },

  {
    path: 'services/automation-integration',
    loadChildren: () =>
      import('./pages/services/automation-integration/automation-integration.module')
        .then(m => m.AutomationIntegrationPageModule)
  },

  {
    path: 'services/web-development',
    loadChildren: () =>
      import('./pages/services/web-development/web-development.module')
        .then(m => m.WebDevelopmentPageModule)
  },

  {
    path: 'services/seo',
    loadChildren: () =>
      import('./pages/services/seo/seo.module')
        .then(m => m.SeoPageModule)
  },

  {
    path: 'services/digital-growth',
    loadChildren: () =>
      import('./pages/services/digital-growth/digital-growth.module')
        .then(m => m.DigitalGrowthPageModule)
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
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'top'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}