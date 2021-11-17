import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutfonctionComponent } from './ajoutfonction.component';

describe('AjoutfonctionComponent', () => {
  let component: AjoutfonctionComponent;
  let fixture: ComponentFixture<AjoutfonctionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutfonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutfonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
