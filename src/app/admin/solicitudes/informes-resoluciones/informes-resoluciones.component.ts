import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-informes-resoluciones',
  templateUrl: './informes-resoluciones.component.html',
  styleUrls: ['./informes-resoluciones.component.css'],
})
export class InformesResolucionesComponent implements OnInit {
  solicitudes: any[] = [];
  searchRUC: string = '';
  selectedSolicitud: any;
  infoIsOpen = false;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
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
