import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListcommissionComponent } from './listcommission.component';

describe('ListcommissionComponent', () => {
  let component: ListcommissionComponent;
  let fixture: ComponentFixture<ListcommissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
