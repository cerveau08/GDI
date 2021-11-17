import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterfincontratComponent } from './interfincontrat.component';

describe('InterfincontratComponent', () => {
  let component: InterfincontratComponent;
  let fixture: ComponentFixture<InterfincontratComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfincontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfincontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
