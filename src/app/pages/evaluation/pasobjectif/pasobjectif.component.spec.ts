import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasobjectifComponent } from './pasobjectif.component';

describe('PasobjectifComponent', () => {
  let component: PasobjectifComponent;
  let fixture: ComponentFixture<PasobjectifComponent>;

  beforeEach(async(() => {
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
