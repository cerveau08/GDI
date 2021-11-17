import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutdomaineComponent } from './ajoutdomaine.component';

describe('AjoutdomaineComponent', () => {
  let component: AjoutdomaineComponent;
  let fixture: ComponentFixture<AjoutdomaineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutdomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutdomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
