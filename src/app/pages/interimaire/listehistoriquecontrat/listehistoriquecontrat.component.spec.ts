import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListehistoriquecontratComponent } from './listehistoriquecontrat.component';

describe('ListehistoriquecontratComponent', () => {
  let component: ListehistoriquecontratComponent;
  let fixture: ComponentFixture<ListehistoriquecontratComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListehistoriquecontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListehistoriquecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
