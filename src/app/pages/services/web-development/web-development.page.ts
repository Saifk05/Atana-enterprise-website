import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

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

  private readonly canonicalUrl =
    'https://www.atnav.in/services/web-development';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {

    // Page title
    this.title.setTitle(
      'Web Development Company in Dharwad & Hubballi | ATNAV'
    );

    // Meta description
    this.meta.updateTag({
      name: 'description',
      content:
        'ATNAV provides web development services in Dharwad and Hubballi, including business websites, web applications, portals, responsive design and performance optimization.'
    });

    // Robots
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Web Development Company in Dharwad & Hubballi | ATNAV'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Professional web development services for websites, web applications, business portals and digital platforms in Dharwad, Hubballi and across India.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Web Development Company in Dharwad & Hubballi | ATNAV'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Web development services for modern websites, web applications, portals and digital platforms.'
    });

    // Canonical
    this.setCanonicalUrl();
  }

  private setCanonicalUrl(): void {

    const existingCanonical =
      this.document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

    if (existingCanonical) {
      existingCanonical.href = this.canonicalUrl;
      return;
    }

    const canonical =
      this.document.createElement('link');

    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute(
      'href',
      this.canonicalUrl
    );

    this.document.head.appendChild(canonical);
  }

  ngOnDestroy(): void {

    // Restore homepage canonical so this service URL
    // does not remain when Angular navigates to another page.
    const canonical =
      this.document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

    if (canonical) {
      canonical.href = 'https://www.atnav.in/';
    }
  }
}