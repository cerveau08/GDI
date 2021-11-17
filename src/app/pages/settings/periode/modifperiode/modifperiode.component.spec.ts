import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifperiodeComponent } from './modifperiode.component';

describe('ModifperiodeComponent', () => {
  let component: ModifperiodeComponent;
  let fixture: ComponentFixture<ModifperiodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifperiodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifperiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
