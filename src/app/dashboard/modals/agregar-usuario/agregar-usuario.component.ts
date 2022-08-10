import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
})
export class AgregarUsuarioComponent implements OnInit {
  @Input() roles: any[] = [];
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedUser: any;

  isSavingUser: boolean = false;
  showPassword: boolean = false;
  showRepeatedPassword = false;
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.selectedUser);
    if (
      this.selectedUser &&
      this.selectedUser.password &&
      this.selectedUser.repeatPassword &&
      this.selectedUser.id_rol &&
      this.selectedUser.password === this.selectedUser.repeatPassword
    ) {
      if (this.selectedUser.id_usuario == 0) {
        this.isSavingUser = true;
        return this.adminService
          .addUser({
            username: this.selectedUser.usuario,
            password: this.selectedUser.password,
            idrol: this.selectedUser.id_rol,
          })
          .subscribe((data) => {
            this.toast.success('Usuario Registrado');
            this.closeModal();
          });
      } else {
        return this.adminService
          .updateUser({
            id_usuario: this.selectedUser.id_usuario,
            usuario: this.selectedUser.usuario,
            clave: this.selectedUser.password,
            id_rol: this.selectedUser.id_rol,
          })
          .subscribe((data) => {
            this.toast.success('Usuario Editado');
            this.closeModal();
          });
      }
    }
    return this.toast.error('Debe Cumplir todos los requisitos');
  }

  closeModal() {
    this.closed.emit();
  }
}
