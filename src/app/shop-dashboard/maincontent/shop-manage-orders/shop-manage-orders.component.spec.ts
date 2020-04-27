import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManageOrdersComponent } from './shop-manage-orders.component';

describe('ShopManageOrdersComponent', () => {
  let component: ShopManageOrdersComponent;
  let fixture: ComponentFixture<ShopManageOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopManageOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
