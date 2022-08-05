import { Component, OnInit } from '@angular/core';
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
