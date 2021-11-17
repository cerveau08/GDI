import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutcommissionComponent } from './ajoutcommission.component';

describe('AjoutcommissionComponent', () => {
  let component: AjoutcommissionComponent;
  let fixture: ComponentFixture<AjoutcommissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
