import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutsocieteComponent } from './ajoutsociete.component';

describe('AjoutsocieteComponent', () => {
  let component: AjoutsocieteComponent;
  let fixture: ComponentFixture<AjoutsocieteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
