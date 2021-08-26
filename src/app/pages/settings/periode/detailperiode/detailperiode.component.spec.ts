import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailperiodeComponent } from './detailperiode.component';

describe('DetailperiodeComponent', () => {
  let component: DetailperiodeComponent;
  let fixture: ComponentFixture<DetailperiodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailperiodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailperiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
