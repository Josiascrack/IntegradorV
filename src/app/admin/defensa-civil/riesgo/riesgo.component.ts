import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.css'],
})
export class RiesgoComponent implements OnInit {
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
