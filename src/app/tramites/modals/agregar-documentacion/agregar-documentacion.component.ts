import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-documentacion',
  templateUrl: './agregar-documentacion.component.html',
  styleUrls: ['./agregar-documentacion.component.css'],
})
export class AgregarDocumentacionComponent implements OnInit {
  @Output() selectedFile: EventEmitter<any> = new EventEmitter<any>();
  file: any = null;
  @Input() tiposDocumento: any[] = [];
  selectedTipo = 0;
  constructor() {}

  ngOnInit(): void {}
  chooseFile(event: any) {
    this.file = event.target.files[0];
    event.target.value = '';
  }

  saveFile() {
    this.selectedFile.emit({
      tipo: this.selectedTipo,
      file: this.file,
    });
    this.file = null;
    this.selectedTipo = 0;
  }
  getFileName() {
    return this.file ? this.file.name : 'Seleccionar archivo';
  }
  cerrarModal() {
    this.file = null;
  }
}
