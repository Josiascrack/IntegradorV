import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-realizar-inspeccion',
  templateUrl: './realizar-inspeccion.component.html',
  styleUrls: ['./realizar-inspeccion.component.css'],
})
export class RealizarInspeccionComponent implements OnInit {
  @Input() solicitud: any;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}
  file: File | undefined;
  comentario: string | undefined;

  ngOnInit(): void {}
  onFileChanged(event: any) {
    this.file = event.target.files[0];
  }
  getFileName() {
    return this.file ? this.file.name : 'Seleccionar archivo';
  }
  closeModal() {
    this.closed.emit();
  }

  generarLicencia() {
    this.adminService
      .realizarInspeccion({
        id_solicitud: this.solicitud.id_solicitud,
        id_establecimiento: this.solicitud.id_establecimiento,
        codigo_solicitud: this.solicitud.codigo_solicitud,
        comentario: this.comentario,
        inspeccion: this.file,
      })
      .subscribe((data) => {
        this.toast.success('Licencia generada con éxito');
        this.closeModal();
      });
  }
}
