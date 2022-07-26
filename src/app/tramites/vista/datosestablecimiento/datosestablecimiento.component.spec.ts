import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosestablecimientoComponent } from './datosestablecimiento.component';

describe('DatosestablecimientoComponent', () => {
  let component: DatosestablecimientoComponent;
  let fixture: ComponentFixture<DatosestablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosestablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosestablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
