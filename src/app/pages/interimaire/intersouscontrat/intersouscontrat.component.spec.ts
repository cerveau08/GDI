import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntersouscontratComponent } from './intersouscontrat.component';

describe('IntersouscontratComponent', () => {
  let component: IntersouscontratComponent;
  let fixture: ComponentFixture<IntersouscontratComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersouscontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersouscontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
