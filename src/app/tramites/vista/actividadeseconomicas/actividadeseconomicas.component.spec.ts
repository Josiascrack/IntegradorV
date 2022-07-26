import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadeseconomicasComponent } from './actividadeseconomicas.component';

describe('ActividadeseconomicasComponent', () => {
  let component: ActividadeseconomicasComponent;
  let fixture: ComponentFixture<ActividadeseconomicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadeseconomicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadeseconomicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
