import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopersonnelComponent } from './infopersonnel.component';

describe('InfopersonnelComponent', () => {
  let component: InfopersonnelComponent;
  let fixture: ComponentFixture<InfopersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
