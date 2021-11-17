import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifsocieteComponent } from './modifsociete.component';

describe('ModifsocieteComponent', () => {
  let component: ModifsocieteComponent;
  let fixture: ComponentFixture<ModifsocieteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
