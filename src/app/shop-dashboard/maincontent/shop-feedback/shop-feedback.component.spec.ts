import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFeedbackComponent } from './shop-feedback.component';

describe('ShopFeedbackComponent', () => {
  let component: ShopFeedbackComponent;
  let fixture: ComponentFixture<ShopFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
