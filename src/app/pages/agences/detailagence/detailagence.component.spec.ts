import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailagenceComponent } from './detailagence.component';

describe('DetailagenceComponent', () => {
  let component: DetailagenceComponent;
  let fixture: ComponentFixture<DetailagenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailagenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
