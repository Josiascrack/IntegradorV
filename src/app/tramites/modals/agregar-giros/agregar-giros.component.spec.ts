import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGirosComponent } from './agregar-giros.component';

describe('AgregarGirosComponent', () => {
  let component: AgregarGirosComponent;
  let fixture: ComponentFixture<AgregarGirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
