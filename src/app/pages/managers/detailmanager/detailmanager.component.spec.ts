import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailmanagerComponent } from './detailmanager.component';

describe('DetailmanagerComponent', () => {
  let component: DetailmanagerComponent;
  let fixture: ComponentFixture<DetailmanagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
