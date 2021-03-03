import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonagenceComponent } from './monagence.component';

describe('MonagenceComponent', () => {
  let component: MonagenceComponent;
  let fixture: ComponentFixture<MonagenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonagenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
