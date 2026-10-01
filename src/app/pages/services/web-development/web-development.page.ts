import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnDestroy,
  Inject
} from '@angular/core';

import {
  CommonModule,
  DOCUMENT
} from '@angular/common';

import { RouterModule } from '@angular/router';

import {
  Meta,
  Title
} from '@angular/platform-browser';

import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.page.html',
  styleUrls: ['./web-development.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebDevelopmentPage implements OnInit, OnDestroy {

  // =====================================================
  // SEO CONFIGURATION
  // =====================================================

  private readonly canonicalUrl =
    'https://www.atnav.in/services/web-development';

  private readonly pageTitle =
    'Web Development Company | Website Development Services | ATNAV';

  private readonly pageDescription =
    'ATNAV provides professional web development services for businesses, including business websites, e-commerce websites, custom web applications, website redesign and performance optimization.';


  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) {}


  // =====================================================
  // INITIALIZATION
  // =====================================================

  ngOnInit(): void {
    this.setupSeo();
    this.setupStructuredData();
  }


  // =====================================================
  // SEO META
  // =====================================================

  private setupSeo(): void {

    this.title.setTitle(this.pageTitle);

    // Primary SEO

    this.meta.updateTag({
      name: 'description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow'
    });


    // Open Graph

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'ATNAV'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.atnav.in/assets/brand/atnav-og.jpg'
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content:
        'ATNAV Web Development Services'
    });


    // Twitter / X

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.atnav.in/assets/brand/atnav-og.jpg'
    });


    // Canonical

    this.setCanonicalUrl();
  }


  // =====================================================
  // CANONICAL
  // =====================================================

  private setCanonicalUrl(): void {

    let canonical =
      this.document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {

      canonical =
        this.document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      'href',
      this.canonicalUrl
    );
  }


  // =====================================================
  // STRUCTURED DATA
  // =====================================================

  private setupStructuredData(): void {

    // Remove an old copy if Angular returns to this route
    this.removeStructuredData();


    // -----------------------------------------------------
    // WEB PAGE SCHEMA
    // -----------------------------------------------------

    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',

      '@id':
        `${this.canonicalUrl}#webpage`,

      url:
        this.canonicalUrl,

      name:
        this.pageTitle,

      description:
        this.pageDescription,

      isPartOf: {
        '@id':
          'https://www.atnav.in/#website'
      },

      about: {
        '@id':
          `${this.canonicalUrl}#service`
      },

      inLanguage:
        'en-IN'
    };


    // -----------------------------------------------------
    // SERVICE SCHEMA
    // -----------------------------------------------------

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',

      '@id':
        `${this.canonicalUrl}#service`,

      name:
        'Web Development Services',

      serviceType:
        'Web Development',

      url:
        this.canonicalUrl,

      description:
        this.pageDescription,

      provider: {
        '@id':
          'https://www.atnav.in/#organization'
      },

      areaServed: [
        {
          '@type': 'City',
          name: 'Bengaluru'
        },
        {
          '@type': 'State',
          name: 'Karnataka'
        },
        {
          '@type': 'Country',
          name: 'India'
        }
      ],

      hasOfferCatalog: {
        '@type': 'OfferCatalog',

        name:
          'Web Development Services',

        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Website Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Website Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Landing Page Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Web Application Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Redesign'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Maintenance'
            }
          }
        ]
      }
    };


    this.addStructuredData(
      'web-development-webpage-schema',
      webPageSchema
    );

    this.addStructuredData(
      'web-development-service-schema',
      serviceSchema
    );
  }


  // =====================================================
  // ADD JSON-LD
  // =====================================================

  private addStructuredData(
    id: string,
    schema: object
  ): void {

    const script =
      this.document.createElement('script');

    script.type =
      'application/ld+json';

    script.id = id;

    script.text =
      JSON.stringify(schema);

    this.document.head.appendChild(script);
  }


  // =====================================================
  // REMOVE JSON-LD
  // =====================================================

  private removeStructuredData(): void {

    this.document
      .getElementById(
        'web-development-webpage-schema'
      )
      ?.remove();

    this.document
      .getElementById(
        'web-development-service-schema'
      )
      ?.remove();
  }


  // =====================================================
  // CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    this.removeStructuredData();

    const canonical =
      this.document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (canonical) {
      canonical.setAttribute(
        'href',
        'https://www.atnav.in/'
      );
    }
  }
}