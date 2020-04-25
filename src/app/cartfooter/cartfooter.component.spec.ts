import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartfooterComponent } from './cartfooter.component';

describe('CartfooterComponent', () => {
  let component: CartfooterComponent;
  let fixture: ComponentFixture<CartfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
