import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifdetailComponent } from './modifdetail.component';

describe('ModifdetailComponent', () => {
  let component: ModifdetailComponent;
  let fixture: ComponentFixture<ModifdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
