import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageshopsComponent } from './manageshops.component';

describe('ManageshopsComponent', () => {
  let component: ManageshopsComponent;
  let fixture: ComponentFixture<ManageshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
