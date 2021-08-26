import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcommissionComponent } from './detailcommission.component';

describe('DetailcommissionComponent', () => {
  let component: DetailcommissionComponent;
  let fixture: ComponentFixture<DetailcommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
