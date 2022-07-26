import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosanexadosComponent } from './requisitosanexados.component';

describe('RequisitosanexadosComponent', () => {
  let component: RequisitosanexadosComponent;
  let fixture: ComponentFixture<RequisitosanexadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosanexadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosanexadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
