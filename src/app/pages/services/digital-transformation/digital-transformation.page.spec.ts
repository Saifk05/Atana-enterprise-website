import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalTransformationPage } from './digital-transformation.page';

describe('DigitalTransformationPage', () => {
  let component: DigitalTransformationPage;
  let fixture: ComponentFixture<DigitalTransformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTransformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
