import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SeoData {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  robots?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private renderer: Renderer2;
  private readonly siteUrl = 'https://www.atnav.in';
  private readonly defaultTitle = 'Web, App & Software Development Company in Bangalore | ATNAV';
  private readonly defaultDescription = 'ATNAV is a web, app and software development company in Bangalore, India. We build websites, mobile apps, custom software, business automation, integrations and digital solutions for growing businesses.';
  private readonly defaultImage = 'https://www.atnav.in/assets/brand/atnav-og.jpg';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(): void {
    this.updateSeo();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.updateSeo());
  }

  private updateSeo(): void {
    let activeRoute = this.route;
    while (activeRoute.firstChild) activeRoute = activeRoute.firstChild;

    const seo: SeoData = activeRoute.snapshot.data?.['seo'] || {};
    const title = seo.title || this.defaultTitle;
    const description = seo.description || this.defaultDescription;
    const canonical = seo.canonical || this.getCurrentUrl();
    const image = seo.image || this.defaultImage;
    const robots = seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'googlebot', content: robots });
    this.meta.updateTag({ name: 'author', content: 'ATNAV' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ATNAV' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: title });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: title });

    this.setCanonical(canonical);
  }

  private getCurrentUrl(): string {
    const path = this.router.url.split('?')[0].split('#')[0];
    return path && path !== '/' ? `${this.siteUrl}${path}` : `${this.siteUrl}/`;
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(link, 'href', url);
  }
}