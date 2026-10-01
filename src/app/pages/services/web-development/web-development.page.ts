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
  // PAGE INITIALIZATION
  // =====================================================

  ngOnInit(): void {
    this.setupSeo();
  }


  // =====================================================
  // SEO
  // =====================================================

  private setupSeo(): void {

    // Page title
    this.title.setTitle(
      this.pageTitle
    );


    // -----------------------------------------------------
    // PRIMARY META
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // OPEN GRAPH
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // TWITTER / X
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // CANONICAL
    // -----------------------------------------------------

    this.setCanonicalUrl();
  }


  // =====================================================
  // CANONICAL URL
  // =====================================================

  private setCanonicalUrl(): void {

    let canonical =
      this.document
        .querySelector<HTMLLinkElement>(
          'link[rel="canonical"]'
        );

    if (!canonical) {

      canonical =
        this.document.createElement(
          'link'
        );

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      this.document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      'href',
      this.canonicalUrl
    );
  }


  // =====================================================
  // CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    const canonical =
      this.document
        .querySelector<HTMLLinkElement>(
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