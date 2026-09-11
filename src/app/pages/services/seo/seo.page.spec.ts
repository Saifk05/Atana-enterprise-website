import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeoPage } from './seo.page';

describe('SeoPage', () => {
  let component: SeoPage;
  let fixture: ComponentFixture<SeoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
