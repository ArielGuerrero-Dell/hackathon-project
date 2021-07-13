import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenAccordionComponent } from './top-ten-accordion.component';

describe('TopTenAccordionComponent', () => {
  let component: TopTenAccordionComponent;
  let fixture: ComponentFixture<TopTenAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
