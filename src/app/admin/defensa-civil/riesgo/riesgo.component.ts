import { Component, OnInit } from '@angular/core';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.css'],
})
export class RiesgoComponent implements OnInit {
  tipoT = TipoTramiteEnum;
  solicitudes: any[] = [];
  searchRUC: string = '';
  selectedSolicitud: any;
  infoIsOpen = false;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getData()
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
  getData(){
    this.adminService.getSolicitudesValidadas().subscribe((data) => {
      this.solicitudes = data;
    });
  }
}
