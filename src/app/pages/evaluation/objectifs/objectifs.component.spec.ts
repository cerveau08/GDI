import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectifsComponent } from './objectifs.component';

describe('ObjectifsComponent', () => {
  let component: ObjectifsComponent;
  let fixture: ComponentFixture<ObjectifsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
