import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoRolComponent } from './mantenimiento-rol.component';

describe('MantenimientoRolComponent', () => {
  let component: MantenimientoRolComponent;
  let fixture: ComponentFixture<MantenimientoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
