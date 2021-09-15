import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailperiodeobjectifComponent } from './detailperiodeobjectif.component';

describe('DetailperiodeobjectifComponent', () => {
  let component: DetailperiodeobjectifComponent;
  let fixture: ComponentFixture<DetailperiodeobjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailperiodeobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailperiodeobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
