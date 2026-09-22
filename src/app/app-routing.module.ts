import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [

  // HOME - main website URL: https://www.atnav.in/
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(m => m.HomePageModule)
  },

  // Redirect old /home URL to /
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },

  // SERVICES
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services-overview/services-overview.module')
        .then(m => m.ServicesOverviewPageModule)
  },

  // APP DEVELOPMENT
  {
    path: 'services/app-development',
    loadChildren: () =>
      import('./pages/services/app-development/app-development.module')
        .then(m => m.AppDevelopmentPageModule)
  },

  // DIGITAL TRANSFORMATION
  {
    path: 'services/digital-transformation',
    loadChildren: () =>
      import('./pages/services/digital-transformation/digital-transformation.module')
        .then(m => m.DigitalTransformationPageModule)
  },

  // AUTOMATION & INTEGRATION
  {
    path: 'services/automation-integration',
    loadChildren: () =>
      import('./pages/services/automation-integration/automation-integration.module')
        .then(m => m.AutomationIntegrationPageModule)
  },

  // WEB DEVELOPMENT
  {
    path: 'services/web-development',
    loadChildren: () =>
      import('./pages/services/web-development/web-development.module')
        .then(m => m.WebDevelopmentPageModule)
  },

  // SEO
  {
    path: 'services/seo',
    loadChildren: () =>
      import('./pages/services/seo/seo.module')
        .then(m => m.SeoPageModule)
  },

  // DIGITAL GROWTH
  {
    path: 'services/digital-growth',
    loadChildren: () =>
      import('./pages/services/digital-growth/digital-growth.module')
        .then(m => m.DigitalGrowthPageModule)
  },

  // WORK / CASE STUDIES
  {
    path: 'work',
    loadChildren: () =>
      import('./pages/work/case-studies/case-studies.module')
        .then(m => m.CaseStudiesPageModule)
  },

  // PROCESS
  {
    path: 'process',
    loadChildren: () =>
      import('./pages/process/process.module')
        .then(m => m.ProcessPageModule)
  },

  // ABOUT
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module')
        .then(m => m.AboutPageModule)
  },

  // CONTACT
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module')
        .then(m => m.ContactPageModule)
  },

  // UNKNOWN ROUTES -> HOME
  {
    path: '**',
    redirectTo: ''
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