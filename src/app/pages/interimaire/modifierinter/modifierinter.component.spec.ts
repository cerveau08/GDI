import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifierinterComponent } from './modifierinter.component';

describe('ModifierinterComponent', () => {
  let component: ModifierinterComponent;
  let fixture: ComponentFixture<ModifierinterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
