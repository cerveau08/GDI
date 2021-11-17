import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasobjectifComponent } from './pasobjectif.component';

describe('PasobjectifComponent', () => {
  let component: PasobjectifComponent;
  let fixture: ComponentFixture<PasobjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
