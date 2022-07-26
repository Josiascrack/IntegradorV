import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatossolicitanteComponent } from './datossolicitante.component';

describe('DatossolicitanteComponent', () => {
  let component: DatossolicitanteComponent;
  let fixture: ComponentFixture<DatossolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatossolicitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatossolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
