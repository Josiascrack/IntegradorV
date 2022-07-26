import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.component.html',
  styleUrls: ['./inspeccion.component.css'],
})
export class InspeccionComponent implements OnInit {
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
