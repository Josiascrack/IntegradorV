import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarDatosCompletosComponent } from './verificar-datos-completos.component';

describe('VerificarDatosCompletosComponent', () => {
  let component: VerificarDatosCompletosComponent;
  let fixture: ComponentFixture<VerificarDatosCompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarDatosCompletosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarDatosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
