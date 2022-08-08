import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TramitesService } from 'src/app/servicios/tramites.service';

@Component({
  selector: 'requisitos-anexados',
  templateUrl: './requisitos-anexados.component.html',
  styleUrls: ['./requisitos-anexados.component.css'],
})
export class RequisitosAnexadosComponent implements OnInit {
  @Output() getSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() preload: any;
  tiposDocumento: any[] = [];
  constructor(
    private router: Router,
    private tramitesService: TramitesService,
    private toast: ToastrService
  ) {}
  savedFiles: any[] = [];
  ngOnInit(): void {
    this.tramitesService.getTipoDocumentos().subscribe((data) => {
      this.tiposDocumento = data;
    });
  }

  goHome() {
    this.getSubmit.emit({
      action: 'home',
    });
  }
  goBack() {
    this.getSubmit.emit({
      action: 'back',
    });
  }
  goNext() {
    if (this.tiposDocumento.every((e) => e.file != null)) {
      return this.getSubmit.emit({
        action: 'end',
        data: {
          savedFiles: this.tiposDocumento,
        },
      });
    }
    this.toast.error('Debe seleccionar todos los documentos requeridos');
  }

  savingSelectedFile(event: any) {
    if (event.file && event.tipo > 0) {
      this.savedFiles.push(event);
    } else {
      console.log('El archivo ya ha sido seleccionado previamente');
    }
  }

  editFile(event: any) {
    console.log(event);
  }

  // deleteFile(event: any) {
  //   this.savedFiles.splice(event, 1);
  // }
  deleteFile(index: number) {
    this.tiposDocumento[index].file = null;
  }

  getTipoName(tipo: any) {
    return this.tiposDocumento.filter((t) => t.id_tipodoc == tipo)[0].nombre;
  }
  getTiposOfSavedFiles() {
    const mappedTypes = this.savedFiles.map((e) => parseInt(e.tipo, 10));
    return this.tiposDocumento.filter(
      (e) => !mappedTypes.includes(e.id_tipodoc)
    );
  }
  fileChanged(index: number, event: any) {
    this.tiposDocumento[index].file = event.files[0];
  }
}
