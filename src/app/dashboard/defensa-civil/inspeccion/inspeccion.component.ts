import { Component, OnInit } from '@angular/core';
import { RegimenTributarioEnum } from 'src/app/enums/regimen.tributario.enum';
import { TipoLicenciaEnum } from 'src/app/enums/tipo.licencia.enum';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.component.html',
  styleUrls: ['./inspeccion.component.css'],
})
export class InspeccionComponent implements OnInit {
  tipoT = TipoTramiteEnum;
  regimenT = RegimenTributarioEnum;
  tipoL = TipoLicenciaEnum;

  solicitudes: any[] = [];
  selectedSolicitud: any;
  infoIsOpen = false;
  searchRUC: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.adminService.getSolicitudesInspeccion().subscribe((data) => {
      this.solicitudes = data;
    });
  }
  infoSelected(id: any) {
    this.selectedSolicitud = this.solicitudes.find(
      (solicitud) => solicitud.id_solicitud == id
    );
    this.infoIsOpen = true;
  }
  closeModal() {
    this.infoIsOpen = false;
    this.getData();
  }
}
