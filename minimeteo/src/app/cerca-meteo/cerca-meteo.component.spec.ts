import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaMeteoComponent } from './cerca-meteo.component';

describe('CercaMeteoComponent', () => {
  let component: CercaMeteoComponent;
  let fixture: ComponentFixture<CercaMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercaMeteoComponent]
    });
    fixture = TestBed.createComponent(CercaMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
