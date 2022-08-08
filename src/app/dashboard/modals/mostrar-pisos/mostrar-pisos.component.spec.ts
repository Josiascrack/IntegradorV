import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPisosComponent } from './mostrar-pisos.component';

describe('MostrarPisosComponent', () => {
  let component: MostrarPisosComponent;
  let fixture: ComponentFixture<MostrarPisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
