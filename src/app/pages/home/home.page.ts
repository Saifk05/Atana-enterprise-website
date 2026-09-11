import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
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
export class HomePage implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;
  private ionContent?: HTMLElement;

  private readonly scrollHandler = (event: Event): void => {
    const customEvent = event as CustomEvent<{
      scrollTop?: number;
    }>;

    const scrollTop = customEvent.detail?.scrollTop ?? 0;

    const root = this.elementRef.nativeElement as HTMLElement;

    const heroSection = root.querySelector(
      '.hero-section'
    ) as HTMLElement | null;

    if (!heroSection) {
      return;
    }

    const visualShift = Math.min(
      scrollTop * 0.08,
      45
    );

    const copyShift = Math.min(
      scrollTop * 0.035,
      20
    );

    const waveShift = Math.min(
      scrollTop * 0.03,
      18
    );

    heroSection.style.setProperty(
      '--hero-visual-shift',
      `${visualShift}px`
    );

    heroSection.style.setProperty(
      '--hero-copy-shift',
      `${copyShift}px`
    );

    heroSection.style.setProperty(
      '--hero-wave-shift',
      `${waveShift}px`
    );
  };

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    this.setupHeroAnimation();
    this.setupScrollReveal();
    this.setupParallax();
  }

  private setupHeroAnimation(): void {
    const root = this.elementRef.nativeElement;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const heroSection = root.querySelector(
          '.hero-section'
        );

        heroSection?.classList.add(
          'hero-ready'
        );
      });
    });
  }

  private setupScrollReveal(): void {
    const root = this.elementRef.nativeElement;

    const selectors: string[] = [
      '.section-heading',
      '.service-card',
      '.transformation-copy',
      '.process-section > .container > .section-label',
      '.process-section > .container > h2',
      '.process-step',
      '.process-connector',
      '.about-copy'
    ];

    const elements = root.querySelectorAll(
      selectors.join(',')
    );

    elements.forEach(
      (element: Element) => {
        element.classList.add(
          'motion-reveal'
        );
      }
    );

    const serviceCards = root.querySelectorAll(
      '.service-card'
    );

    serviceCards.forEach(
      (
        element: Element,
        index: number
      ) => {
        const htmlElement =
          element as HTMLElement;

        htmlElement.style.setProperty(
          '--motion-delay',
          `${index * 70}ms`
        );
      }
    );

    const trustMetrics = root.querySelectorAll(
      '.trust-metric'
    );

    trustMetrics.forEach(
      (
        element: Element,
        index: number
      ) => {
        const htmlElement =
          element as HTMLElement;

        htmlElement.style.setProperty(
          '--motion-delay',
          `${index * 80}ms`
        );
      }
    );

    const caseCards = root.querySelectorAll(
      '.case-card'
    );

    caseCards.forEach(
      (
        element: Element,
        index: number
      ) => {
        const htmlElement =
          element as HTMLElement;

        htmlElement.style.setProperty(
          '--motion-delay',
          `${index * 100}ms`
        );
      }
    );

    const processSteps = root.querySelectorAll(
      '.process-step'
    );

    processSteps.forEach(
      (
        element: Element,
        index: number
      ) => {
        const htmlElement =
          element as HTMLElement;

        htmlElement.style.setProperty(
          '--motion-delay',
          `${index * 90}ms`
        );
      }
    );

    const processConnectors = root.querySelectorAll(
      '.process-connector'
    );

    processConnectors.forEach(
      (
        element: Element,
        index: number
      ) => {
        const htmlElement =
          element as HTMLElement;

        htmlElement.style.setProperty(
          '--motion-delay',
          `${120 + index * 90}ms`
        );
      }
    );

    this.observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[]
      ) => {
        entries.forEach(
          (
            entry: IntersectionObserverEntry
          ) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element =
              entry.target as HTMLElement;

            element.classList.add(
              'motion-visible'
            );

            this.observer?.unobserve(
              element
            );
          }
        );
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach(
      (element: Element) => {
        this.observer?.observe(
          element
        );
      }
    );
  }

  private setupParallax(): void {
    const root = this.elementRef.nativeElement;

    const content = root.querySelector(
      'ion-content'
    );

    if (!content) {
      return;
    }

    this.ionContent =
      content as HTMLElement;

    this.ionContent.addEventListener(
      'ionScroll',
      this.scrollHandler
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (this.ionContent) {
      this.ionContent.removeEventListener(
        'ionScroll',
        this.scrollHandler
      );
    }
  }

} 