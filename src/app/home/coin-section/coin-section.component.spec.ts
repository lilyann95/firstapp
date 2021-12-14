import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSectionComponent } from './coin-section.component';

describe('CoinSectionComponent', () => {
  let component: CoinSectionComponent;
  let fixture: ComponentFixture<CoinSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
