import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompteComponent } from './compte.component';

describe('CompteComponent', () => {
  let component: CompteComponent;
  let fixture: ComponentFixture<CompteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
