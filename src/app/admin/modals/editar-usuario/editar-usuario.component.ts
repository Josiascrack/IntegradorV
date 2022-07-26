import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  @Input() roles: any[] = [];
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  isSavingUser: boolean = false;
  showPassword: boolean = false;
  showRepeatedPassword = false;
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstPassword: new FormControl('', [Validators.required]),
    lastPassword: new FormControl('', [Validators.required]),
    idrol: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  onSubmit() {
    if (!this.ifErrors()) {
      if (
        this.userForm.value.firstPassword! === this.userForm.value.lastPassword!
      ) {
        const { username, firstPassword, lastPassword, idrol } =
          this.userForm.value;
        return this.adminService
          .addUser({ username, password: firstPassword, idrol })
          .subscribe((data) => {
            this.toast.success('Usuario Registrado');
            this.closeModal();
          });
      }
      return this.toast.error('Las contraseñas no coinciden');
    }
    return this.toast.error('Debe llenar todos los campos');
  }
  ifErrors() {
    if (
      Object.keys(this.getErrors()!) &&
      Object.keys(this.getErrors()!).length !== 0
    ) {
      return true;
    }
    return false;
  }
  getErrors() {
    const errors = Object.keys(this.userForm.controls)
      .map((key) => {
        const controlErrors = this.userForm.get(key)!.errors;
        return controlErrors;
      })
      .reduce((a, b) => {
        return { ...a, ...b };
      });
    return errors;
  }
  closeModal() {
    this.closed.emit();
  }
}
