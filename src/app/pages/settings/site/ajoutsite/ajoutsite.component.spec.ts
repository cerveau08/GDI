import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutsiteComponent } from './ajoutsite.component';

describe('AjoutsiteComponent', () => {
  let component: AjoutsiteComponent;
  let fixture: ComponentFixture<AjoutsiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
