import { Component, OnInit } from '@angular/core';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-validar-solicitudes',
  templateUrl: './validar-solicitudes.component.html',
  styleUrls: ['./validar-solicitudes.component.css'],
})
export class ValidarSolicitudesComponent implements OnInit {
  solicitudes: any[] = [];
  tipoT = TipoTramiteEnum;
  selectedSolicitud: any;
  infoIsOpen = false;
  searchRUC: string = '';
  constructor(private adminService: AdminService) {}

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
    this.adminService.getSolicitudesRegistradas().subscribe((data) => {
      this.solicitudes = data;
    });
  }
  closeModal() {
    this.infoIsOpen = false;
    this.getData();
  }
}
