import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowerSectionComponent } from './empower-section.component';

describe('EmpowerSectionComponent', () => {
  let component: EmpowerSectionComponent;
  let fixture: ComponentFixture<EmpowerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpowerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpowerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
