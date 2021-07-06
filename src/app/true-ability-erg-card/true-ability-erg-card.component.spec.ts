import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueAbilityErgCardComponent } from './true-ability-erg-card.component';

describe('TrueAbilityErgCardComponent', () => {
  let component: TrueAbilityErgCardComponent;
  let fixture: ComponentFixture<TrueAbilityErgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueAbilityErgCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueAbilityErgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
