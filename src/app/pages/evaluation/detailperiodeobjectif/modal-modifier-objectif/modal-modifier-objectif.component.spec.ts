import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalModifierObjectifComponent } from './modal-modifier-objectif.component';

describe('ModalModifierObjectifComponent', () => {
  let component: ModalModifierObjectifComponent;
  let fixture: ComponentFixture<ModalModifierObjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalModifierObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifierObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
