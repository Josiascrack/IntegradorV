import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirVoucherComponent } from './subir-voucher.component';

describe('SubirVoucherComponent', () => {
  let component: SubirVoucherComponent;
  let fixture: ComponentFixture<SubirVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
