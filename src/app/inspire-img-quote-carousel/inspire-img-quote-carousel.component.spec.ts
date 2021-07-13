import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireImgQuoteCarouselComponent } from './inspire-img-quote-carousel.component';

describe('InspireImgQuoteCarouselComponent', () => {
  let component: InspireImgQuoteCarouselComponent;
  let fixture: ComponentFixture<InspireImgQuoteCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspireImgQuoteCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireImgQuoteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
