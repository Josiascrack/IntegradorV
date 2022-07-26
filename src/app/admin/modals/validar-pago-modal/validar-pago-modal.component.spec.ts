import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPagoModalComponent } from './validar-pago-modal.component';

describe('ValidarPagoModalComponent', () => {
  let component: ValidarPagoModalComponent;
  let fixture: ComponentFixture<ValidarPagoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarPagoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarPagoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
