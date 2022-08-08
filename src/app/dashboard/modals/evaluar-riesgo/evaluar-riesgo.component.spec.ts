import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarRiesgoComponent } from './evaluar-riesgo.component';

describe('EvaluarRiesgoComponent', () => {
  let component: EvaluarRiesgoComponent;
  let fixture: ComponentFixture<EvaluarRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarRiesgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluarRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
