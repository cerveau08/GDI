import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManagerEvaluComponent } from './manager-evalu.component';

describe('ManagerEvaluComponent', () => {
  let component: ManagerEvaluComponent;
  let fixture: ComponentFixture<ManagerEvaluComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEvaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEvaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
