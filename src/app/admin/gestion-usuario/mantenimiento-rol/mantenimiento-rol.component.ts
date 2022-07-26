import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-mantenimiento-rol',
  templateUrl: './mantenimiento-rol.component.html',
  styleUrls: ['./mantenimiento-rol.component.css'],
})
export class MantenimientoRolComponent implements OnInit {
  roles: any[] = [];
  searchedString:string=''
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }
}
