import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttestationmesInterimaireComponent } from './attestationmesInterimaire.component';

describe('AttestationmesInterimaireComponent', () => {
  let component: AttestationmesInterimaireComponent;
  let fixture: ComponentFixture<AttestationmesInterimaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationmesInterimaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationmesInterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
