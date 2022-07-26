import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.css'],
})
export class ValidarSolicitudComponent implements OnInit {
  @Input() id_solicitud: any;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  isValidating: boolean = false;
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  validarSolicitud() {
    this.isValidating = true;
    this.adminService.validarSolicitud(this.id_solicitud).subscribe((data) => {
      this.closeModal(true);
      this.toast.success('Solicitud validada con éxito');
    });
  }
  closeModal(st: boolean) {
    this.closed.emit(st);
  }
}
