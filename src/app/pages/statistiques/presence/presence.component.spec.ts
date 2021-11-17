import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PresenceComponent } from './presence.component';

describe('PresenceComponent', () => {
  let component: PresenceComponent;
  let fixture: ComponentFixture<PresenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
