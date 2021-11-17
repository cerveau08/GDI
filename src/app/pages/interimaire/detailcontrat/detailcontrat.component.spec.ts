import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailcontratComponent } from './detailcontrat.component';

describe('DetailcontratComponent', () => {
  let component: DetailcontratComponent;
  let fixture: ComponentFixture<DetailcontratComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
