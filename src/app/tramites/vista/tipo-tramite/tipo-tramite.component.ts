import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TipoTramiteDTO } from '../../models/tipoTramite';

@Component({
  selector: 'app-tipo-tramite',
  templateUrl: './tipo-tramite.component.html',
  styleUrls: ['./tipo-tramite.component.css'],
})
export class TipoTramiteComponent implements OnInit {
  @Output() getSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() preload: any;
  constructor(private router: Router, private toast: ToastrService) {}

  ngOnInit(): void {
    const objecto: TipoTramiteDTO = new TipoTramiteDTO(
      this.preload as TipoTramiteDTO
    );
    this.tipoForm.setValue({
      ...objecto,
    });
  }

  tipoForm = new FormGroup({
    tipoLicencia: new FormControl('', [Validators.required]),
    tipoTramite: new FormControl('', [Validators.required]),
  });
  goHome() {
    this.getSubmit.emit({
      action: 'home',
    });
  }

  onSubmit() {
    if (!this.ifErrors()) {
      return this.getSubmit.emit({
        action: 'submit',
        data: this.tipoForm.value,
      });
    }
    this.toast.error('Debe llenar todos los campos');
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
    const errors = Object.keys(this.tipoForm.controls)
      .map((key) => {
        const controlErrors = this.tipoForm.get(key)!.errors;
        return controlErrors;
      })
      .reduce((a, b) => {
        return { ...a, ...b };
      });
    return errors;
  }
}
/**
 * ElLoquitoGonzales PASS FOR TWILIO
 */
