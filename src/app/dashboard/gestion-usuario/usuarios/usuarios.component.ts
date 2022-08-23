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
  selectedUser: any = {
    id_usuario: 0,
    usuario: '',
    password: '',
    repeatPassword: '',
    id_rol: 0,
  };
  isUserModalOpen: boolean = false;
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getRoleNameById(id: number) {
    return this.roles.find((role) => role.id_rol === id)?.nombre;
  }

  getUsers() {
    this.adminService.getRoles().subscribe((data) => {
      this.roles = data;
      this.adminService.getUsers().subscribe((data) => {
        this.users = data;
      });
    });
  }

  deleteUser(id: number) {
    return this.adminService.deleteUser(id).subscribe({
      next: (data) => {
        this.getUsers();
        this.toast.success('Usuario eliminado correctamente');
      },
      error:(err)=>{
        this.toast.error('El usuario no puede ser eliminado');

      }
    });
  }
  closedModal() {
    this.isUserModalOpen = false;
    this.selectedUser = {
      id_usuario: 0,
      usuario: '',
      password: '',
      repeatPassword: '',
      id_rol: 0,
    };
    this.getUsers();
  }
  openModal(idusario: number) {
    console.log(idusario);
    if (idusario != 0) {
      this.selectedUser = this.users.find(
        (user) => user.id_usuario === idusario
      );
    }
    console.log(this.selectedUser);
    this.isUserModalOpen = true;
  }
}
