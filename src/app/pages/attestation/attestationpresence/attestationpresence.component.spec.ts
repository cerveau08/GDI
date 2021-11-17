import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttestationpresenceComponent } from './attestationpresence.component';

describe('AttestationpresenceComponent', () => {
  let component: AttestationpresenceComponent;
  let fixture: ComponentFixture<AttestationpresenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationpresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationpresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
