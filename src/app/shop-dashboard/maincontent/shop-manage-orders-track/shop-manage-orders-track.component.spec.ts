import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManageOrdersTrackComponent } from './shop-manage-orders-track.component';

describe('ShopManageOrdersTrackComponent', () => {
  let component: ShopManageOrdersTrackComponent;
  let fixture: ComponentFixture<ShopManageOrdersTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopManageOrdersTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopManageOrdersTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
