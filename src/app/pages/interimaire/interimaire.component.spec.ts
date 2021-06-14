import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimaireComponent } from './interimaire.component';

describe('InterimaireComponent', () => {
  let component: InterimaireComponent;
  let fixture: ComponentFixture<InterimaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterimaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
