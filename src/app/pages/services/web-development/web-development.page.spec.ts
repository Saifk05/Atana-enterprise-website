import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebDevelopmentPage } from './web-development.page';

describe('WebDevelopmentPage', () => {
  let component: WebDevelopmentPage;
  let fixture: ComponentFixture<WebDevelopmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
