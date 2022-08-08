import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarInspeccionComponent } from './realizar-inspeccion.component';

describe('RealizarInspeccionComponent', () => {
  let component: RealizarInspeccionComponent;
  let fixture: ComponentFixture<RealizarInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarInspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
