import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGirosComponent } from './mostrar-giros.component';

describe('MostrarGirosComponent', () => {
  let component: MostrarGirosComponent;
  let fixture: ComponentFixture<MostrarGirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
