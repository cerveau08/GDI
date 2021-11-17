import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifdirectionComponent } from './modifdirection.component';

describe('ModifdirectionComponent', () => {
  let component: ModifdirectionComponent;
  let fixture: ComponentFixture<ModifdirectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifdirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
