import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResolucionesComponent } from './informes-resoluciones.component';

describe('InformesResolucionesComponent', () => {
  let component: InformesResolucionesComponent;
  let fixture: ComponentFixture<InformesResolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResolucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
