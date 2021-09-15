import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifierObjectifComponent } from './modal-modifier-objectif.component';

describe('ModalModifierObjectifComponent', () => {
  let component: ModalModifierObjectifComponent;
  let fixture: ComponentFixture<ModalModifierObjectifComponent>;

  beforeEach(async(() => {
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
