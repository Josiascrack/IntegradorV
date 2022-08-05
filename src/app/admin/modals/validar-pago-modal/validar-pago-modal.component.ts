import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';
import { ConsultasService } from 'src/app/servicios/consultas.service';

@Component({
  selector: 'app-validar-pago-modal',
  templateUrl: './validar-pago-modal.component.html',
  styleUrls: ['./validar-pago-modal.component.css'],
})
export class ValidarPagoModalComponent implements OnInit {
  isValidating: boolean = false;
  @Input() codigo: any;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  voucher: any = {};
  constructor(
    private consultasService: ConsultasService,
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.consultasService
      .getSolicitudByCodigoPagada(this.codigo)
      .subscribe((data: any) => {
        console.log(data);
        if (Object.keys(data).length > 0) {
          this.voucher = data;
        }
      });
  }
  validarPago() {
    this.isValidating = true;
    this.adminService.validarPago(this.codigo).subscribe((data: any) => {
      this.isValidating = false;
      this.toast.success("Pago validado correctamente");
      this.closeModal(true);
    });
  }

  closeModal(st: boolean) {
    this.closed.emit(st);
  }
  openFile(url: any) {
    window.open(
      `https://docs.google.com/viewerng/viewer?url=https://storage.googleapis.com/app-geslic.appspot.com/documents/vouchers/${this.codigo}/${url}`,
      '_blank'
    );
  }
}
