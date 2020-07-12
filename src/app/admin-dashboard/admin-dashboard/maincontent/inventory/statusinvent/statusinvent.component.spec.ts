import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusinventComponent } from './statusinvent.component';

describe('StatusinventComponent', () => {
  let component: StatusinventComponent;
  let fixture: ComponentFixture<StatusinventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusinventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusinventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
