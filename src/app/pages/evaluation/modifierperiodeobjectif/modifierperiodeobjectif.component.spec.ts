import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifierperiodeobjectifComponent } from './modifierperiodeobjectif.component';

describe('ModifierperiodeobjectifComponent', () => {
  let component: ModifierperiodeobjectifComponent;
  let fixture: ComponentFixture<ModifierperiodeobjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierperiodeobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierperiodeobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
