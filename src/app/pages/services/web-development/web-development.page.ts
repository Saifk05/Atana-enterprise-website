import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.page.html',
  styleUrls: ['./web-development.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebDevelopmentPage implements OnInit {
  private readonly canonicalUrl = 'https://www.atnav.in/services/web-development';
  private readonly pageTitle = 'Web Development Company in Bangalore | ATNAV';
  private readonly pageDescription = 'ATNAV provides web development services in Bangalore for businesses that need fast, responsive and scalable websites, web applications and digital platforms.';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.setupStructuredData();
  }

  private setupStructuredData(): void {
    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.canonicalUrl}#webpage`,
      url: this.canonicalUrl,
      name: this.pageTitle,
      description: this.pageDescription,
      isPartOf: { '@id': 'https://www.atnav.in/#website' },
      about: { '@id': `${this.canonicalUrl}#service` },
      inLanguage: 'en-IN'
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${this.canonicalUrl}#service`,
      name: 'Web Development Services',
      serviceType: 'Web Development',
      url: this.canonicalUrl,
      description: this.pageDescription,
      provider: { '@id': 'https://www.atnav.in/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Belagavi' },
        { '@type': 'City', name: 'Hubballi' },
        { '@type': 'City', name: 'Dharwad' },
        { '@type': 'City', name: 'Mysuru' },
        { '@type': 'City', name: 'Mangaluru' },
        { '@type': 'City', name: 'Shivamogga' },
        { '@type': 'City', name: 'Davanagere' },
        { '@type': 'City', name: 'Ballari' },
        { '@type': 'City', name: 'Kalaburagi' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'Country', name: 'India' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Responsive Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Progressive Web App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Performance Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Speed Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Integration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Payment Gateway Integration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Integration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Software Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Admin Dashboard Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Portal Development' } }
        ]
      }
    };

    this.addStructuredData('web-development-webpage-schema', webPageSchema);
    this.addStructuredData('web-development-service-schema', serviceSchema);
  }

  private addStructuredData(id: string, schema: object): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}