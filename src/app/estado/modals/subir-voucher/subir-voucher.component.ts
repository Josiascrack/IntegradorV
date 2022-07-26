import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from 'src/app/servicios/consultas.service';

@Component({
  selector: 'app-subir-voucher',
  templateUrl: './subir-voucher.component.html',
  styleUrls: ['./subir-voucher.component.css'],
})
export class SubirVoucherComponent implements OnInit {
  @Input() codigo: any;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  file: any;
  isValidating: boolean = false;
  constructor(
    private consultasService: ConsultasService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  closeModal(st: boolean) {
    this.closed.emit(st);
  }
  getFileName() {
    return this.file ? this.file.name : 'Seleccionar archivo';
  }
  chooseFile(event: any) {
    this.file = event.target.files[0];
    event.target.value = '';
  }
  uploadFile() {
    this.isValidating = true;
    this.consultasService
      .uploadPagoVoucher(this.codigo, this.file)
      .subscribe((data) => {
        console.log(data);

        this.toast.success('Voucher subido correctamente');
        this.closeModal(true);
      });
  }
}
