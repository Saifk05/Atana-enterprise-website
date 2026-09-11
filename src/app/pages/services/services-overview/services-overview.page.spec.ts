import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesOverviewPage } from './services-overview.page';

describe('ServicesOverviewPage', () => {
  let component: ServicesOverviewPage;
  let fixture: ComponentFixture<ServicesOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
