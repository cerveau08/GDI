import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EvaluerComponent } from './evaluer.component';

describe('EvaluerComponent', () => {
  let component: EvaluerComponent;
  let fixture: ComponentFixture<EvaluerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
