import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.page.html',
  styleUrls: ['./services-overview.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesOverviewPage implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupRevealAnimations();
  }

  private setupRevealAnimations(): void {
    const root = this.elementRef.nativeElement;
    const selectors = [
      '.hero-copy',
      '.hero-capabilities',
      '.section-heading',
      '.service-card',
      '.capabilities-copy',
      '.capability-row',
      '.engagement-card',
      '.process-step',
      '.process-connector',
      '.services-cta-inner'
    ];

    const elements = root.querySelectorAll(selectors.join(','));

    elements.forEach((element: Element) => {
      element.classList.add('services-reveal');
    });

    root.querySelectorAll('.service-card').forEach((element: Element, index: number) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${index * 70}ms`);
    });

    root.querySelectorAll('.capability-row').forEach((element: Element, index: number) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${index * 65}ms`);
    });

    root.querySelectorAll('.engagement-card').forEach((element: Element, index: number) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${index * 90}ms`);
    });

    root.querySelectorAll('.process-step').forEach((element: Element, index: number) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${index * 80}ms`);
    });

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('services-visible');
          this.observer?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach(element => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}