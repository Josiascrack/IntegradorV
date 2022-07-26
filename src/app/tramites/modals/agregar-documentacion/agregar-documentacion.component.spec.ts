import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocumentacionComponent } from './agregar-documentacion.component';

describe('AgregarDocumentacionComponent', () => {
  let component: AgregarDocumentacionComponent;
  let fixture: ComponentFixture<AgregarDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDocumentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
