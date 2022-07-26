import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-mostrar-documentos',
  templateUrl: './mostrar-documentos.component.html',
  styleUrls: ['./mostrar-documentos.component.css'],
})
export class MostrarDocumentosComponent implements OnInit {
  documentos: any[] = [];

  @Output() closed: EventEmitter<void> = new EventEmitter();

  @Input() id_solicitud: any;
  @Input() codigo: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService
      .getDocumentosBySolicitud(this.id_solicitud)
      .subscribe((data) => {
        this.documentos = data;
        console.log(data);
      });
  }
  closeModal() {
    this.closed.emit();
  }
  openFile(file: any) {
    window.open(
      `https://docs.google.com/viewerng/viewer?url=https://storage.googleapis.com/app-geslic.appspot.com/documents/${this.codigo}/${file}`,
      '_blank'
    );
  }

  
}
