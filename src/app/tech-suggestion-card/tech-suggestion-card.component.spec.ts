import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSuggestionCardComponent } from './tech-suggestion-card.component';

describe('TechSuggestionCardComponent', () => {
  let component: TechSuggestionCardComponent;
  let fixture: ComponentFixture<TechSuggestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSuggestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSuggestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
