import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstablecimientoDTO } from '../../models/establecimiento';

@Component({
  selector: 'app-datosestablecimiento',
  templateUrl: './datosestablecimiento.component.html',
  styleUrls: ['./datosestablecimiento.component.css'],
})
export class DatosestablecimientoComponent implements OnInit {
  @Output() getSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() preload: any;
  constructor(private router: Router, private toast: ToastrService) {}

  pisos: any[] = [];
  establecimientoForm = new FormGroup({
    direccionEstablecimiento: new FormControl('', [Validators.required]),
    numeroEstablecimiento: new FormControl('', []),
    letraEstablecimiento: new FormControl('', []),
    intEstablecimiento: new FormControl('', []),
    letintEstablecimiento: new FormControl('', []),
    mzEstablecimiento: new FormControl('', []),
    loteEstablecimiento: new FormControl('', []),
    bloqueEstablecimiento: new FormControl('', []),
    dptoEstablecimiento: new FormControl('', []),
    nucleoEstablecimiento: new FormControl('', []),
    tipoEstablecimiento: new FormControl('', []),
    clasificacionEstablecimiento: new FormControl('', []),
    zonificacionEstablecimiento: new FormControl('', []),
    aforoEstablecimiento: new FormControl('', [Validators.required]),
    antiguedadEstablecimiento: new FormControl('', [Validators.required]),
    nomComercialEstablecimiento: new FormControl('', [Validators.required]),
    nEmpleadosEstablecimiento: new FormControl('', [Validators.required]),
    referenciaEstablecimiento: new FormControl('', []),
    nPisosEstablecimiento: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    const objecto: EstablecimientoDTO = new EstablecimientoDTO(
      this.preload as EstablecimientoDTO
    );

    this.establecimientoForm.patchValue(objecto);
    this.pisos = this.preload.pisos || [];
  }
  goHome() {
    this.getSubmit.emit({
      action: 'home',
    });
  }
  goBack() {
    this.getSubmit.emit({
      action: 'back',
    });
  }
  onSubmit() {
    if (!this.ifErrors()) {
      return this.getSubmit.emit({
        action: 'submit',
        data: {
          ...this.establecimientoForm.value,
          pisos: this.pisos,
        },
      });
    }
    this.toast.error('Por favor corrige los errores');
  }

  calcularPisos(target: any) {
    const value = parseInt(target.value);
    if (target.value && /^\d*$/g.test(target.value) && value <= 10) {
      const array = Array(value).fill(0);
      console.log(array);
      return (this.pisos = array);
    }
    this.pisos = [];
    target.value = '';
    return;
  }

  getTotal() {
    return this.pisos.reduce((a, b) => a + b, 0);
  }

  tableValue(event: any, index: number) {
    const value = parseInt(event.value);
    if (value > 0) {
      return (this.pisos[index] = value);
    }
    return (this.pisos[index] = 0);
  }
  trackByFn(index: any, item: any) {
    return index;
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
    const errors = Object.keys(this.establecimientoForm.controls)
      .map((key) => {
        const controlErrors = this.establecimientoForm.get(key)!.errors;
        return controlErrors;
      })
      .reduce((a, b) => {
        return { ...a, ...b };
      });
    return errors;
  }
}
