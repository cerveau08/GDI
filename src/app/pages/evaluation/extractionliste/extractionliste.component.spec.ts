import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionlisteComponent } from './extractionliste.component';

describe('ExtractionlisteComponent', () => {
  let component: ExtractionlisteComponent;
  let fixture: ComponentFixture<ExtractionlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
