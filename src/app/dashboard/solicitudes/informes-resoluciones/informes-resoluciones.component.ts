import { Component, OnInit } from '@angular/core';
import { RegimenTributarioEnum } from 'src/app/enums/regimen.tributario.enum';
import { TipoLicenciaEnum } from 'src/app/enums/tipo.licencia.enum';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-informes-resoluciones',
  templateUrl: './informes-resoluciones.component.html',
  styleUrls: ['./informes-resoluciones.component.css'],
})
export class InformesResolucionesComponent implements OnInit {
  solicitudes: any[] = [];
  tipoT = TipoTramiteEnum;
  regimenT = RegimenTributarioEnum;
  tipoL = TipoLicenciaEnum;
  searchRUC: string = '';
  selectedSolicitud: any;
  infoIsOpen = false;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    console.log(TipoTramiteEnum[1]);
    this.getData();
  }
  getData() {
    this.adminService.getSolicitudesPagadasValidadas().subscribe((data) => {
      console.log(data)
      this.solicitudes = data;
    });
  }
  closeModal() {
    this.infoIsOpen = false;
    this.getData();
  }
  infoSelected(id: any) {
    this.selectedSolicitud = this.solicitudes.find(
      (solicitud) => solicitud.id_solicitud == id
    );
    this.infoIsOpen = true;
  }
}
