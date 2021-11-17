import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemandeComponent } from './demande.component';

describe('DemandeComponent', () => {
  let component: DemandeComponent;
  let fixture: ComponentFixture<DemandeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
