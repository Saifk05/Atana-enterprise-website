import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [

  // =========================================================
  // HOME
  // =========================================================
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(m => m.HomePageModule),

    data: {
      seo: {
        title:
          'Web, App & Software Development Company in Bangalore | ATNAV',

        description:
          'ATNAV is a web, app and software development company in Bangalore, India. We build websites, mobile apps, custom software, business automation, integrations and digital solutions for growing businesses.',

        canonical:
          'https://www.atnav.in/',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // OLD HOME REDIRECT
  // =========================================================
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },


  // =========================================================
  // SERVICES OVERVIEW
  // =========================================================
  {
    path: 'services',

    loadChildren: () =>
      import(
        './pages/services/services-overview/services-overview.module'
      )
        .then(m => m.ServicesOverviewPageModule),

    data: {
      seo: {
        title:
          'Software & Digital Technology Services in Bangalore | ATNAV',

        description:
          'Explore ATNAV services including web development, mobile app development, custom software, business automation, system integration, digital transformation, SEO and digital growth.',

        canonical:
          'https://www.atnav.in/services',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // WEB DEVELOPMENT
  // =========================================================
  {
    path: 'services/web-development',

    loadChildren: () =>
      import(
        './pages/services/web-development/web-development.module'
      )
        .then(m => m.WebDevelopmentPageModule),

    data: {
      seo: {
        title:
          'Web Development Company in Bangalore | ATNAV',

        description:
          'ATNAV provides web development services in Bangalore for businesses that need fast, responsive and scalable websites, web applications and digital platforms.',

        canonical:
          'https://www.atnav.in/services/web-development',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // APP DEVELOPMENT
  // =========================================================
  {
    path: 'services/app-development',

    loadChildren: () =>
      import(
        './pages/services/app-development/app-development.module'
      )
        .then(m => m.AppDevelopmentPageModule),

    data: {
      seo: {
        title:
          'Mobile App Development Company in Bangalore | ATNAV',

        description:
          'ATNAV provides mobile app development services in Bangalore, building scalable Android, iOS and cross-platform applications for startups and growing businesses.',

        canonical:
          'https://www.atnav.in/services/app-development',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // DIGITAL TRANSFORMATION
  // =========================================================
  {
    path: 'services/digital-transformation',

    loadChildren: () =>
      import(
        './pages/services/digital-transformation/digital-transformation.module'
      )
        .then(m => m.DigitalTransformationPageModule),

    data: {
      seo: {
        title:
          'Digital Transformation Services in Bangalore | ATNAV',

        description:
          'ATNAV helps businesses modernize operations through custom software, connected digital platforms, workflow automation and scalable technology solutions.',

        canonical:
          'https://www.atnav.in/services/digital-transformation',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // AUTOMATION & INTEGRATION
  // =========================================================
  {
    path: 'services/automation-integration',

    loadChildren: () =>
      import(
        './pages/services/automation-integration/automation-integration.module'
      )
        .then(m => m.AutomationIntegrationPageModule),

    data: {
      seo: {
        title:
          'Business Automation & Integration Services | ATNAV',

        description:
          'Automate repetitive business processes and connect applications, APIs and data with custom workflow automation and system integration solutions from ATNAV.',

        canonical:
          'https://www.atnav.in/services/automation-integration',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // SEO
  // =========================================================
  {
    path: 'services/seo',

    loadChildren: () =>
      import(
        './pages/services/seo/seo.module'
      )
        .then(m => m.SeoPageModule),

    data: {
      seo: {
        title:
          'SEO Services in Bangalore | ATNAV',

        description:
          'Improve your search visibility with ATNAV SEO services including technical SEO, on-page optimization, content optimization and organic search strategies.',

        canonical:
          'https://www.atnav.in/services/seo',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // DIGITAL GROWTH
  // =========================================================
  {
    path: 'services/digital-growth',

    loadChildren: () =>
      import(
        './pages/services/digital-growth/digital-growth.module'
      )
        .then(m => m.DigitalGrowthPageModule),

    data: {
      seo: {
        title:
          'Digital Growth & Marketing Services | ATNAV',

        description:
          'ATNAV provides digital growth strategies, lead generation, digital marketing and technology-driven solutions designed to help businesses reach and convert more customers.',

        canonical:
          'https://www.atnav.in/services/digital-growth',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // WORK / CASE STUDIES
  // =========================================================
  {
    path: 'work',

    loadChildren: () =>
      import(
        './pages/work/case-studies/case-studies.module'
      )
        .then(m => m.CaseStudiesPageModule),

    data: {
      seo: {
        title:
          'Software, Web & App Development Projects | ATNAV',

        description:
          'Explore software, web, mobile application, automation and digital technology projects designed and developed by ATNAV.',

        canonical:
          'https://www.atnav.in/work',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // PROCESS
  // =========================================================
  {
    path: 'process',

    loadChildren: () =>
      import(
        './pages/process/process.module'
      )
        .then(m => m.ProcessPageModule),

    data: {
      seo: {
        title:
          'Our Software Development Process | ATNAV',

        description:
          'Discover how ATNAV takes digital products from idea to launch through discovery, strategy, design, development, testing, deployment and continuous improvement.',

        canonical:
          'https://www.atnav.in/process',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // ABOUT
  // =========================================================
  {
    path: 'about',

    loadChildren: () =>
      import(
        './pages/about/about.module'
      )
        .then(m => m.AboutPageModule),

    data: {
      seo: {
        title:
          'About ATNAV | Software Development Company in Bangalore',

        description:
          'Learn about ATNAV, a Bangalore-based technology company helping businesses build websites, mobile applications, custom software, automation and connected digital solutions.',

        canonical:
          'https://www.atnav.in/about',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // CONTACT
  // =========================================================
  {
    path: 'contact',

    loadChildren: () =>
      import(
        './pages/contact/contact.module'
      )
        .then(m => m.ContactPageModule),

    data: {
      seo: {
        title:
          'Contact ATNAV | Software Development Company Bangalore',

        description:
          'Contact ATNAV to discuss your website, mobile app, custom software, automation, integration or digital transformation project.',

        canonical:
          'https://www.atnav.in/contact',

        image:
          'https://www.atnav.in/assets/brand/atnav-og.jpg'
      }
    }
  },


  // =========================================================
  // UNKNOWN ROUTES
  // =========================================================
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
        preloadingStrategy:
          PreloadAllModules,

        scrollPositionRestoration:
          'top',

        anchorScrolling:
          'enabled'
      }

    )

  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {}