import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MesObjectifsComponent } from './mes-objectifs.component';

describe('MesObjectifsComponent', () => {
  let component: MesObjectifsComponent;
  let fixture: ComponentFixture<MesObjectifsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MesObjectifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
