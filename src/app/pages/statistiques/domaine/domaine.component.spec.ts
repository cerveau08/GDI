import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomaineComponent } from './domaine.component';

describe('DomaineComponent', () => {
  let component: DomaineComponent;
  let fixture: ComponentFixture<DomaineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
