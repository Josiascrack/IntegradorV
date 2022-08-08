import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionSolicitudComponent } from './informacion-solicitud.component';

describe('InformacionSolicitudComponent', () => {
  let component: InformacionSolicitudComponent;
  let fixture: ComponentFixture<InformacionSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
