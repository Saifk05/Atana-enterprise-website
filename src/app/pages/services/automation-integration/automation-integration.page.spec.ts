import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutomationIntegrationPage } from './automation-integration.page';

describe('AutomationIntegrationPage', () => {
  let component: AutomationIntegrationPage;
  let fixture: ComponentFixture<AutomationIntegrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationIntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
