import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifieruserComponent } from './modifieruser.component';

describe('ModifieruserComponent', () => {
  let component: ModifieruserComponent;
  let fixture: ComponentFixture<ModifieruserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
