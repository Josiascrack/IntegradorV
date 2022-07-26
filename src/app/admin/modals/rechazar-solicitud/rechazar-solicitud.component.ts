import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-rechazar-solicitud',
  templateUrl: './rechazar-solicitud.component.html',
  styleUrls: ['./rechazar-solicitud.component.css'],
})
export class RechazarSolicitudComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  isSavingUser: boolean = false;
  @Input() id_solicitud?: number;
  rechazoForm = new FormGroup({
    motivo: new FormControl('', [Validators.required]),
  });
  constructor(
    private toast: ToastrService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}
  closeModal() {
    this.closed.emit();
  }
  onSubmit() {
    if (
      this.rechazoForm.value.motivo &&
      this.rechazoForm.value.motivo.length > 0
    ) {
      this.isSavingUser = true;
      this.rechazoForm.disable()

      return this.adminService
        .rechazarSolicitud(this.id_solicitud, this.rechazoForm.value.motivo)
        .subscribe((data) => {
          this.rechazoForm.enable()

          this.isSavingUser = false;
          this.toast.success('Solicitud rechazada con éxito');
          this.closeModal();
        });
    }
    console.log(this.rechazoForm.value.motivo)
    return this.toast.error('Debe llenar todos los campos');
  }
}
