import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPartnersSectionComponent } from './trusted-partners-section.component';

describe('TrustedPartnersSectionComponent', () => {
  let component: TrustedPartnersSectionComponent;
  let fixture: ComponentFixture<TrustedPartnersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedPartnersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedPartnersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
