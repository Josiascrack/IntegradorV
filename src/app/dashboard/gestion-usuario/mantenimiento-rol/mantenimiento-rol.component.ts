import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-mantenimiento-rol',
  templateUrl: './mantenimiento-rol.component.html',
  styleUrls: ['./mantenimiento-rol.component.css'],
})
export class MantenimientoRolComponent implements OnInit {
  roles: any[] = [];
  access: any[] = [];
  selectedIdRol = 0;
  rolename: string = '';
  selectedAccess: any[] = [];
  searchedString: string = '';
  isModalOpen: boolean = false;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getRoles();
    this.adminService.getAllAccess().subscribe((data) => {
      this.access = data;
    });
  }
  getRoles() {
    this.adminService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  createRol() {
    this.adminService
      .createRole(
        this.rolename,
        this.selectedAccess.map((e) => e.id_acceso)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  openModal(id: number) {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.selectedAccess = [];
  }
  getAccess() {
    console.log(this.selectedAccess);
    return this.selectedAccess.length>0
      ? this.access.filter(
          (e) =>
            !this.selectedAccess.map((e) => e.id_acceso).includes(e.id_acceso)
        )
      : this.access;
  }
  deleteRol(id: number) {
    this.adminService.deleteRole(id).subscribe((data) => {
      this.getRoles();
    });
  }
  updateAccess(id: number) {
    console.log(id)
    this.adminService.getAccessById(id).subscribe((data) => {
      console.log(data)
      this.rolename = data.rol;
      this.selectedAccess = data.accesos;
      this.isModalOpen = true;
    });
  }
}
