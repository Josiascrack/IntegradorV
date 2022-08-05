import { Component, OnInit } from '@angular/core';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-validar-pago',
  templateUrl: './validar-pago.component.html',
  styleUrls: ['./validar-pago.component.css'],
})
export class ValidarPagoComponent implements OnInit {
  solicitudes: any[] = [];
  constructor(private adminService: AdminService) {}
  tipoT = TipoTramiteEnum;
  selectedSolicitud: any;
  infoIsOpen = false;
  searchedString: string = '';
  ngOnInit(): void {
    this.getData();
  }
  infoSelected(id: any) {
    this.selectedSolicitud = this.solicitudes.find(
      (solicitud) => solicitud.id_solicitud == id
    );
    this.infoIsOpen = true;
  }
  getData() {
    this.adminService.getSolicitudesPagadas().subscribe((data) => {
      console.log(data)
      this.solicitudes = data;
    });
  }
  closeModal() {
    this.infoIsOpen = false;
    this.getData();
  }
}
