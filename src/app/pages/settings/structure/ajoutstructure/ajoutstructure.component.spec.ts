import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutstructureComponent } from './ajoutstructure.component';

describe('AjoutstructureComponent', () => {
  let component: AjoutstructureComponent;
  let fixture: ComponentFixture<AjoutstructureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
