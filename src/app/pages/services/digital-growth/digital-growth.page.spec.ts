import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalGrowthPage } from './digital-growth.page';

describe('DigitalGrowthPage', () => {
  let component: DigitalGrowthPage;
  let fixture: ComponentFixture<DigitalGrowthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalGrowthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
