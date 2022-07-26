import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  searchedString: string = '';
  users: any[] = [];
  roles: any[] = [];
  isUserModalOpen: boolean = false;
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getRoleNameById(id: number) {
    return this.roles.find((role) => role.id_rol === id).nombre;
  }

  getUsers() {
    this.adminService.getRoles().subscribe((data) => {
      this.roles = data;
      this.adminService.getUsers().subscribe((data) => {
        console.log(data);
        this.users = data;
      });
    });
  }

  deleteUser(id: number) {
    return this.adminService.deleteUser(id).subscribe((data) => {
      this.getUsers();
      this.toast.success('Usuario eliminado correctamente');
    });
  }
  closedModal() {
    this.isUserModalOpen = false;
    this.getUsers();
  }
}
