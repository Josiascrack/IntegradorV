import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarLicenciaComponent } from './generar-licencia.component';

describe('GenerarLicenciaComponent', () => {
  let component: GenerarLicenciaComponent;
  let fixture: ComponentFixture<GenerarLicenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarLicenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
