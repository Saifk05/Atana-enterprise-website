import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesPage } from './case-studies.page';

describe('CaseStudiesPage', () => {
  let component: CaseStudiesPage;
  let fixture: ComponentFixture<CaseStudiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
