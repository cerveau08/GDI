import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasevaluationComponent } from './pasevaluation.component';

describe('PasevaluationComponent', () => {
  let component: PasevaluationComponent;
  let fixture: ComponentFixture<PasevaluationComponent>;

  beforeEach(async(() => {
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
