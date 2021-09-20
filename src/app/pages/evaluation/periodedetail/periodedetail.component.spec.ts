import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodedetailComponent } from './periodedetail.component';

describe('PeriodedetailComponent', () => {
  let component: PeriodedetailComponent;
  let fixture: ComponentFixture<PeriodedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
