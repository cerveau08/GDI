import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutprofilComponent } from './ajoutprofil.component';

describe('AjoutprofilComponent', () => {
  let component: AjoutprofilComponent;
  let fixture: ComponentFixture<AjoutprofilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
