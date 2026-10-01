import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private ionContent?: HTMLElement;

  private readonly scrollHandler = (event: Event): void => {
    const customEvent = event as CustomEvent<{ scrollTop?: number }>;
    const scrollTop = customEvent.detail?.scrollTop ?? 0;
    const root = this.elementRef.nativeElement;
    const heroSection = root.querySelector('.hero-section') as HTMLElement | null;
    if (!heroSection) return;

    heroSection.style.setProperty('--hero-visual-shift', `${Math.min(scrollTop * 0.08, 45)}px`);
    heroSection.style.setProperty('--hero-copy-shift', `${Math.min(scrollTop * 0.035, 20)}px`);
    heroSection.style.setProperty('--hero-wave-shift', `${Math.min(scrollTop * 0.03, 18)}px`);
  };

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupHeroAnimation();
    this.setupScrollReveal();
    this.setupParallax();
  }

  private setupHeroAnimation(): void {
    const root = this.elementRef.nativeElement;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.querySelector('.hero-section')?.classList.add('hero-ready');
      });
    });
  }

  private setupScrollReveal(): void {
    const root = this.elementRef.nativeElement;
    const selectors = [
      '.section-heading',
      '.service-card',
      '.transformation-copy',
      '.process-section > .container > .section-label',
      '.process-section > .container > h2',
      '.process-step',
      '.process-connector',
      '.about-copy',
      '.about-showcase article',
      '.why-card',
      '.solution-row',
      '.idea-cta-copy',
      '.idea-card',
      '.idea-mini-card',
      '.local-heading',
      '.local-copy',
      '.process-grid article',
      '.final-cta-inner'
    ];

    const elements = root.querySelectorAll(selectors.join(','));
    elements.forEach(element => element.classList.add('motion-reveal'));

    this.setDelays(root, '.service-card', 70);
    this.setDelays(root, '.trust-metric', 80);
    this.setDelays(root, '.case-card', 100);
    this.setDelays(root, '.process-step', 90);
    this.setDelays(root, '.why-card', 80);
    this.setDelays(root, '.process-grid article', 90);

    root.querySelectorAll('.process-connector').forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${120 + index * 90}ms`);
    });

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        this.observer?.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => this.observer?.observe(element));
  }

  private setDelays(root: HTMLElement, selector: string, delay: number): void {
    root.querySelectorAll(selector).forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--motion-delay', `${index * delay}ms`);
    });
  }

  private setupParallax(): void {
    const content = this.elementRef.nativeElement.querySelector('ion-content');
    if (!content) return;

    this.ionContent = content as HTMLElement;
    this.ionContent.addEventListener('ionScroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.ionContent?.removeEventListener('ionScroll', this.scrollHandler);
  }
}