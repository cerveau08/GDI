import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailinterComponent } from './detailinter.component';

describe('DetailinterComponent', () => {
  let component: DetailinterComponent;
  let fixture: ComponentFixture<DetailinterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
