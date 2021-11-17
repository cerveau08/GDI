import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutperiodeComponent } from './ajoutperiode.component';

describe('AjoutperiodeComponent', () => {
  let component: AjoutperiodeComponent;
  let fixture: ComponentFixture<AjoutperiodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutperiodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutperiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
