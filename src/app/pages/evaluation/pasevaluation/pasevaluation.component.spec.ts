import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasevaluationComponent } from './pasevaluation.component';

describe('PasevaluationComponent', () => {
  let component: PasevaluationComponent;
  let fixture: ComponentFixture<PasevaluationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
