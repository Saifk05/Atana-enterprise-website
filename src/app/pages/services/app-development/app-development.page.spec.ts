import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppDevelopmentPage } from './app-development.page';

describe('AppDevelopmentPage', () => {
  let component: AppDevelopmentPage;
  let fixture: ComponentFixture<AppDevelopmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
