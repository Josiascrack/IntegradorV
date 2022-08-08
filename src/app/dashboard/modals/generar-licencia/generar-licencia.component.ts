import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-generar-licencia',
  templateUrl: './generar-licencia.component.html',
  styleUrls: ['./generar-licencia.component.css'],
})
export class GenerarLicenciaComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter();
  file: File | undefined;
  @Input() solicitud: any;
  numero_licencia: number | undefined;
  comentario: string | undefined;

  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.solicitud);
  }
  getFileName() {
    return this.file ? this.file.name : 'Seleccionar archivo';
  }
  closeModal() {
    this.closed.emit();
  }
  onFileChanged(event: any) {
    this.file = event.target.files[0];
  }
  generarLicencia() {
    this.adminService
      .generarLicencia({
        id_solicitud: this.solicitud.id_solicitud,
        id_establecimiento: this.solicitud.id_establecimiento,
        codigo_solicitud: this.solicitud.codigo_solicitud,
        numero_licencia: this.numero_licencia,
        comentario: this.comentario,
        licencia: this.file,
        correo: this.solicitud.correo,
      })
      .subscribe((data) => {
        this.toast.success('Licencia generada con éxito');
        this.closeModal();
      });
  }
}
