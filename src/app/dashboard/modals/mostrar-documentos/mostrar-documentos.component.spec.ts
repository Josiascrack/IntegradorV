import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDocumentosComponent } from './mostrar-documentos.component';

describe('MostrarDocumentosComponent', () => {
  let component: MostrarDocumentosComponent;
  let fixture: ComponentFixture<MostrarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
