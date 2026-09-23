# Atnav Enterprise Website

A modern enterprise website for **Atnav**, a digital technology and consulting company focused on building scalable digital products, modernizing business operations, connecting systems, and accelerating digital growth.

The application is built with **Angular, Ionic, TypeScript, and SCSS** using a modular frontend architecture, lazy-loaded feature routes, standalone Angular pages, reusable shared components, and responsive layouts.

---

## Table of Contents

- [Overview](#overview)
- [Core Services](#core-services)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Application Routes](#application-routes)
- [Component Architecture](#component-architecture)
- [Shared Components](#shared-components)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Production Build](#production-build)
- [Adding a New Page](#adding-a-new-page)
- [Adding a New Service](#adding-a-new-service)
- [Development Guidelines](#development-guidelines)
- [Git Workflow](#git-workflow)
- [Commit Convention](#commit-convention)
- [Pre-Push Checklist](#pre-push-checklist)
- [Development Status](#development-status)
- [Repository](#repository)

---

## Overview

Atnav is an enterprise digital technology and consulting website designed to communicate the company's technical capabilities, services, delivery approach, and business value.

The platform is structured around six primary service areas:

- App Development
- Digital Transformation
- Automation & Integration
- Web Development
- SEO
- Digital Growth

Each service has its own dedicated route, content structure, visual system, capabilities, workflow, and business outcomes.

The frontend has been designed to remain modular and scalable as additional services, case studies, company content, and digital experiences are introduced.

---

## Core Services

### App Development

Design and engineering of scalable digital applications and platforms.

Focus areas include:

- Web applications
- Mobile applications
- Internal business systems
- Product platforms
- API-connected applications
- Business applications
- Scalable application architecture

Route:

```text
/services/app-development
```

---

### Digital Transformation

Modernization of business processes, systems, and digital operations.

Focus areas include:

- Process modernization
- Legacy system modernization
- Digital operations
- Workflow redesign
- System architecture
- Platform modernization
- Operational efficiency

Route:

```text
/services/digital-transformation
```

---

### Automation & Integration

Connecting business systems and automating repetitive operational workflows.

Focus areas include:

- Workflow automation
- API integration
- System integration
- Business process automation
- Enterprise connectivity
- Data synchronization
- Application integration

Route:

```text
/services/automation-integration
```

---

### Web Development

Design and engineering of modern, responsive, and performance-focused web experiences.

Focus areas include:

- Corporate websites
- Enterprise websites
- Marketing websites
- Web platforms
- Responsive frontend development
- Performance optimization
- Scalable frontend architecture

Route:

```text
/services/web-development
```

---

### SEO

Technical and strategic search optimization designed to improve organic visibility.

Focus areas include:

- Technical SEO
- Search architecture
- On-page optimization
- Content optimization
- Organic visibility
- Search performance
- SEO measurement

Route:

```text
/services/seo
```

---

### Digital Growth

Digital growth strategy focused on acquisition, conversion, measurement, and continuous optimization.

Focus areas include:

- Growth strategy
- Performance marketing
- Customer acquisition
- Conversion optimization
- Analytics
- Attribution
- Customer journey optimization
- Growth measurement

Route:

```text
/services/digital-growth
```

---

## Technology Stack

### Frontend

| Technology | Purpose |
| --- | --- |
| Angular | Frontend application framework |
| Ionic | UI and web component ecosystem |
| TypeScript | Application development language |
| SCSS | Component and page styling |
| Angular Router | Application routing and lazy loading |
| RxJS | Reactive programming |
| HTML5 | Semantic page structure |

### Development Tools

- Node.js
- npm
- Angular CLI
- Ionic CLI
- Git
- GitHub
- Visual Studio Code

---

## Architecture

The project follows a **feature-based frontend architecture**.

Major application areas are separated into feature directories rather than maintaining all components in a single global directory.

The architecture is designed around:

- Lazy-loaded feature routes
- Standalone Angular page components
- Feature routing modules
- Feature modules
- Shared global components
- Component-scoped SCSS
- Reusable design patterns
- Responsive layouts
- Separation between global and feature-specific UI

Each service is independently structured so its implementation can evolve without tightly coupling it to other service pages.

---

## Project Structure

```text
Atnav-website/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── pages/
│   │   │   │
│   │   │   ├── home/
│   │   │   │
│   │   │   ├── services/
│   │   │   │   │
│   │   │   │   ├── services-overview/
│   │   │   │   │
│   │   │   │   ├── app-development/
│   │   │   │   │   ├── app-development-routing.module.ts
│   │   │   │   │   ├── app-development.module.ts
│   │   │   │   │   ├── app-development.page.html
│   │   │   │   │   ├── app-development.page.scss
│   │   │   │   │   ├── app-development.page.spec.ts
│   │   │   │   │   └── app-development.page.ts
│   │   │   │   │
│   │   │   │   ├── digital-transformation/
│   │   │   │   │
│   │   │   │   ├── automation-integration/
│   │   │   │   │
│   │   │   │   ├── web-development/
│   │   │   │   │
│   │   │   │   ├── seo/
│   │   │   │   │
│   │   │   │   └── digital-growth/
│   │   │   │
│   │   │   ├── process/
│   │   │   ├── work/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   │
│   │   ├── shared/
│   │   │   │
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   └── footer/
│   │   │   │
│   │   │   └── shared.module.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── assets/
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── ionic.config.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Application Routes

The application uses Angular Router with lazy-loaded feature modules.

### Main Routes

```text
/
└── /home

/home

/services
├── /services/app-development
├── /services/digital-transformation
├── /services/automation-integration
├── /services/web-development
├── /services/seo
└── /services/digital-growth

/process
/work
/about
/contact
```

### Lazy Loading

Major pages are loaded through Angular feature modules.

Example:

```ts
{
  path: 'services/digital-growth',
  loadChildren: () =>
    import(
      './pages/services/digital-growth/digital-growth.module'
    ).then(m => m.DigitalGrowthPageModule)
}
```

The wildcard route should remain at the end of the route configuration:

```ts
{
  path: '**',
  redirectTo: 'home'
}
```

Routes declared after the wildcard route will not be reached.

---

## Component Architecture

Service pages currently follow the standalone Angular component pattern.

Example:

```ts
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-digital-growth',
  templateUrl: './digital-growth.page.html',
  styleUrls: ['./digital-growth.page.scss'],
  standalone: false,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DigitalGrowthPage {}
```

Because the page is standalone, it is **imported** into the feature module instead of being added to `declarations`.

Example:

```ts
import { NgModule } from '@angular/core';

import {
  DigitalGrowthPageRoutingModule
} from './digital-growth-routing.module';

import {
  DigitalGrowthPage
} from './digital-growth.page';

@NgModule({
  imports: [
    DigitalGrowthPageRoutingModule,
    DigitalGrowthPage
  ]
})
export class DigitalGrowthPageModule {}
```

Feature routing:

```ts
import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  DigitalGrowthPage
} from './digital-growth.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalGrowthPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DigitalGrowthPageRoutingModule {}
```

---

## Ionic Integration

The application uses Ionic web components inside Angular templates.

Examples:

```html
<ion-content [fullscreen]="true">
</ion-content>
```

```html
<ion-icon
  name="arrow-forward-outline"
></ion-icon>
```

Where required, pages use:

```ts
CUSTOM_ELEMENTS_SCHEMA
```

Example:

```ts
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
```

This allows Ionic/custom web elements to be used by the Angular component.

---

## Shared Components

Global UI components are maintained inside:

```text
src/app/shared/
```

### Header

Location:

```text
src/app/shared/components/header/
```

The header is responsible for:

- Atnav branding
- Primary navigation
- Service navigation
- Contact navigation
- Project CTA
- Desktop navigation
- Mobile navigation
- Mobile menu state

Usage:

```html
<app-header></app-header>
```

---

### Footer

Location:

```text
src/app/shared/components/footer/
```

The footer is responsible for:

- Global footer content
- Brand positioning
- Shared CTA
- Navigation links
- Service links
- Company information

Usage:

```html
<app-footer></app-footer>
```

The header and footer should remain shared components rather than being duplicated inside individual feature pages.

---

## Design System

Atnav follows a minimal enterprise visual language.

The design is intentionally restrained and focuses on:

- Strong typography
- High contrast
- Large editorial headlines
- Clear information hierarchy
- Structured spacing
- Minimal decoration
- Subtle interaction
- Business-oriented visual storytelling

### Core Colors

```scss
$cream: #f3eee3;
$creamSoft: #faf7f1;
$black: #080808;
$white: #ffffff;
$border: #d6cec2;
$muted: #746d63;
```

### Primary Palette

| Token | Value | Usage |
| --- | --- | --- |
| Black | `#080808` | Hero sections, dark sections, primary text |
| Cream | `#F3EEE3` | Primary page background |
| Soft Cream | `#FAF7F1` | Alternate sections |
| White | `#FFFFFF` | High contrast text and controls |
| Border | `#D6CEC2` | Cards, dividers, structural lines |
| Muted | `#746D63` | Secondary text and labels |

### Design Principles

1. Keep the visual hierarchy simple.
2. Use typography as a primary design element.
3. Avoid unnecessary decorative UI.
4. Use black sections strategically for contrast.
5. Maintain consistent spacing between sections.
6. Keep animations subtle and functional.
7. Use service-specific diagrams and interface visuals.
8. Maintain consistent card, border, and typography behavior.
9. Design desktop and mobile experiences together.
10. Keep global components reusable.

---

## Responsive Design

The application is designed for:

- Large desktop
- Desktop
- Laptop
- Tablet
- Mobile

Typical responsive breakpoints include:

```scss
@media (max-width: 1100px) {
}

@media (max-width: 1000px) {
}

@media (max-width: 700px) {
}

@media (max-width: 480px) {
}
```

Desktop layouts typically use CSS Grid with multiple columns.

Example:

```scss
.service-hero-grid {
  display: grid;

  grid-template-columns:
    minmax(420px, 0.95fr)
    minmax(0, 1.05fr);

  align-items: center;

  gap: 80px;
}
```

Tablet and mobile layouts collapse into single-column structures.

Example:

```scss
@media (max-width: 1000px) {

  .service-hero-grid {
    grid-template-columns: 1fr;
  }

}
```

---

## Prerequisites

Before running the project locally, install:

- Node.js
- npm
- Angular CLI
- Ionic CLI
- Git

Verify the environment:

```bash
node --version
npm --version
ng version
ionic --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Saifk05/Atnav-enterprise-website.git
```

Navigate into the project:

```bash
cd Atnav-enterprise-website
```

Install dependencies:

```bash
npm install
```

---

## Running Locally

Start the Angular development server:

```bash
ng serve
```

Alternatively:

```bash
npm start
```

Or run through Ionic:

```bash
ionic serve
```

The application is normally available at:

```text
http://localhost:4200
```

Angular automatically rebuilds the application when source files are changed.

---

## Production Build

Create an Angular production build:

```bash
ng build
```

Alternatively:

```bash
ionic build
```

The current Angular workspace configuration generates the application output under:

```text
www/
```

Always run a production build before deployment to identify:

- TypeScript compilation errors
- Angular template errors
- Invalid imports
- Route configuration problems
- Build budget warnings/errors
- SCSS compilation issues

---

## Adding a New Page

New pages should follow the existing feature-based architecture.

Example:

```text
src/app/pages/example/
├── example-routing.module.ts
├── example.module.ts
├── example.page.html
├── example.page.scss
├── example.page.spec.ts
└── example.page.ts
```

### Step 1 — Page Component

```ts
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
  standalone: false,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExamplePage {}
```

### Step 2 — Routing Module

```ts
import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  ExamplePage
} from './example.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExamplePageRoutingModule {}
```

### Step 3 — Feature Module

```ts
import { NgModule } from '@angular/core';

import {
  ExamplePageRoutingModule
} from './example-routing.module';

import {
  ExamplePage
} from './example.page';

@NgModule({
  imports: [
    ExamplePageRoutingModule,
    ExamplePage
  ]
})
export class ExamplePageModule {}
```

### Step 4 — Main Route

Add the lazy-loaded route to:

```text
src/app/app-routing.module.ts
```

Example:

```ts
{
  path: 'example',
  loadChildren: () =>
    import('./pages/example/example.module')
      .then(m => m.ExamplePageModule)
}
```

---

## Adding a New Service

New service pages should be created under:

```text
src/app/pages/services/
```

Recommended structure:

```text
src/app/pages/services/example-service/
├── example-service-routing.module.ts
├── example-service.module.ts
├── example-service.page.html
├── example-service.page.scss
├── example-service.page.spec.ts
└── example-service.page.ts
```

Add the route:

```ts
{
  path: 'services/example-service',
  loadChildren: () =>
    import(
      './pages/services/example-service/example-service.module'
    ).then(m => m.ExampleServicePageModule)
}
```

Then add navigation from the Services Overview page:

```html
<a routerLink="/services/example-service">
  Explore Service
</a>
```

### Service Page Requirements

Each service page should contain its own:

- Hero messaging
- Service-specific visual
- Service introduction
- Capabilities
- Business/system architecture
- Business outcomes
- Delivery process
- Responsive behavior

Service pages should follow the same Atnav design system without becoming exact visual duplicates.

---

## Development Guidelines

### TypeScript

- Prefer strongly typed code.
- Use explicit return types where appropriate.
- Keep components focused on their page responsibilities.
- Avoid unnecessary business logic inside templates.
- Keep feature-specific logic inside its feature directory.
- Reuse shared components for global UI.
- Avoid duplicating global behavior across pages.

---

### Angular

- Use lazy loading for major features.
- Follow the existing standalone page pattern.
- Import standalone pages into feature modules.
- Do not add standalone pages to `declarations`.
- Use `RouterModule` for internal navigation.
- Keep the wildcard route last.
- Keep shared components inside `SharedModule`.

---

### HTML

Use semantic page structures.

Recommended:

```html
<section>
  <div class="container">
    <h2>
      Section title
    </h2>
  </div>
</section>
```

Use Angular routing for internal application navigation:

```html
<a routerLink="/services">
  Services
</a>
```

Avoid unnecessary deeply nested markup.

---

### SCSS

- Keep page styles inside the page's SCSS file.
- Maintain the shared Atnav color system.
- Prefer CSS Grid and Flexbox.
- Keep responsive styles close to component styles.
- Avoid unnecessary `!important`.
- Avoid excessive absolute positioning.
- Keep animation restrained.
- Maintain consistent border radii.
- Maintain consistent section spacing.
- Use scalable typography with `clamp()` where appropriate.

Example:

```scss
.hero-copy h1 {
  font-size: clamp(56px, 5vw, 82px);
  line-height: 0.97;
  letter-spacing: -0.055em;
}
```

---

## Git Workflow

The primary development branch is:

```text
main
```

Check repository status:

```bash
git status
```

Stage all changes:

```bash
git add .
```

Review staged changes:

```bash
git status
```

Commit:

```bash
git commit -m "feat: describe the change"
```

Push:

```bash
git push origin main
```

Verify after pushing:

```bash
git status
```

Expected output:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

## Commit Convention

Use clear and consistent commit messages.

Recommended prefixes:

| Prefix | Usage |
| --- | --- |
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code restructuring |
| `style` | UI/style changes |
| `docs` | Documentation |
| `test` | Test changes |
| `chore` | Maintenance |
| `build` | Build/configuration changes |
| `perf` | Performance improvement |

Examples:

```bash
git commit -m "feat: add digital growth service page"
```

```bash
git commit -m "feat: add automation and integration workflow architecture"
```

```bash
git commit -m "fix: correct service route configuration"
```

```bash
git commit -m "style: improve mobile service layouts"
```

```bash
git commit -m "refactor: simplify shared navigation structure"
```

```bash
git commit -m "docs: update project documentation"
```

---

## Pre-Push Checklist

Before pushing a feature, verify the following:

- Application starts successfully
- No TypeScript compilation errors
- No Angular template errors
- Routes load correctly
- Internal navigation works
- Header works
- Footer works
- Desktop layout is correct
- Tablet layout is correct
- Mobile layout is correct
- No unintended horizontal scrolling
- Ionic components render correctly
- Production build succeeds
- No sensitive credentials are committed
- `git status` contains only intended changes

Recommended:

```bash
ng build
```

Then:

```bash
git status
```

---

## Development Status

### Implemented

- [x] Angular application setup
- [x] Ionic integration
- [x] Application routing
- [x] Lazy-loaded feature modules
- [x] Shared header
- [x] Shared footer
- [x] Responsive navigation
- [x] Home page
- [x] Services overview
- [x] App Development service page
- [x] Digital Transformation service page
- [x] Automation & Integration service page
- [x] Web Development service page
- [x] SEO service page
- [x] Digital Growth service page
- [x] Responsive service layouts
- [x] Enterprise black/cream design system

### In Progress / Planned

- [ ] Process page refinement
- [ ] Work / case studies
- [ ] Company page refinement
- [ ] Contact experience
- [ ] SEO metadata
- [ ] Open Graph metadata
- [ ] Accessibility improvements
- [ ] Performance optimization
- [ ] Analytics integration
- [ ] Production deployment configuration
- [ ] Cross-browser testing
- [ ] Lighthouse optimization

---

## Security

Do not commit:

```text
.env
API keys
Access tokens
Private keys
Passwords
Database credentials
Production secrets
```

Sensitive configuration should be stored using environment-specific configuration or the deployment platform's secret/environment-variable management system.

Always inspect staged files before pushing:

```bash
git status
```

For a detailed staged diff:

```bash
git diff --staged
```

---

## Testing

Page test files follow the Angular/Ionic convention:

```text
*.page.spec.ts
```

Run the project's configured test command using the scripts defined in `package.json`.

As the project evolves, testing should cover:

- Component rendering
- Navigation
- Shared components
- Service pages
- Responsive behavior
- User interactions

---

## Performance Considerations

The application architecture is designed to support performance through:

- Lazy-loaded feature modules
- Feature isolation
- Reusable shared components
- Responsive CSS
- Minimal visual dependencies
- CSS-based interface visuals
- Scoped page styles

Future optimization should include:

- Image optimization
- Asset compression
- Bundle analysis
- Font optimization
- Core Web Vitals monitoring
- Lighthouse auditing
- Route-level performance testing

---

## Browser Support

The website should be tested against current versions of major modern browsers, including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Mobile testing should include both Android and iOS viewport behavior.

---

## Repository

Repository:

```text
https://github.com/Saifk05/Atnav-enterprise-website
```

Primary branch:

```text
main
```

Project:

```text
Atnav Enterprise Website
```

---

## License

This project is currently maintained as the Atnav enterprise website.

Unless a separate license is added to the repository, the source code should be treated as proprietary project code.

---

## Atnav

**Enterprise digital systems built for modern business.**

App Development · Digital Transformation · Automation & Integration · Web Development · SEO · Digital Growth