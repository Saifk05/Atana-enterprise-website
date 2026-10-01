import {
  Component,
  Inject,
  OnInit,
  OnDestroy
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

import {
  Meta,
  Title
} from '@angular/platform-browser';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.page.html',
  styleUrls: ['./app-development.page.scss'],
  standalone: false
})
export class AppDevelopmentPage implements OnInit, OnDestroy {

  // =====================================================
  // SEO CONFIGURATION
  // =====================================================

  private readonly canonicalUrl =
    'https://www.atnav.in/services/app-development';

  private readonly pageTitle =
    'Mobile App Development Company | Web & Android Apps | ATNAV';

  private readonly pageDescription =
    'ATNAV is an app development company providing custom mobile app, Android app, web application and business software development services for businesses.';


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
  }


  // =====================================================
  // SEO
  // =====================================================

  private setupSeo(): void {

    // Page Title
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
        'ATNAV Mobile App Development Services'
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
      this.document.querySelector<HTMLLinkElement>(
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