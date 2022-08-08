import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TramitesService } from 'src/app/servicios/tramites.service';
import { SolicitanteDTO } from '../../models/solicitante';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css'],
})
export class SolicitanteComponent implements OnInit {
  @Output() getSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() preload: any;
  constructor(
    private router: Router,
    private tramitesService: TramitesService,
    private toast: ToastrService
  ) {}
  captcha = {
    data: '',
    text: '',
  };

  limaDistricts: any[] = [
    'Miraflores',
    'Pueblo Libre',
    'San Isidro',
    'San Miguel',
    'San Juan de Lurigancho',
    'San Juan de Miraflores',
    'San Luis',
    'Tamburillo',
    'Pajaritos',
    'Lurigancho',
    'Chosica',
    'Pucusana',
    'Juanjui',
    'Contamana',
    'Calana',
    'Cercado',
    'Pajarillo',
    'Iluminado',
    'Pucara',
    'José María Arguedas',
    'Lurín',
    'Los Cedros',
  ];

  ngOnInit(): void {
    const objecto: SolicitanteDTO = new SolicitanteDTO(
      this.preload as SolicitanteDTO
    );

    console.log('objecto', objecto);
    this.solicitanteForm.setValue({
      ...objecto,
    });

    // this.solicitanteForm.controls['razonSocial'];
    // this.solicitanteForm.controls['direccion'];
    // this.solicitanteForm.controls['departamento'];
    // this.solicitanteForm.controls['provincia'];
    // this.solicitanteForm.controls['distrito'];

    // this.tramitesService.getCaptcha().subscribe((data) => {
    //   this.captcha = data;

    //   console.log(this.captcha);
    // });
  }

  solicitanteForm = new FormGroup({
    tipoContribuyente: new FormControl('', [Validators.required]),
    ruc: new FormControl('', [Validators.required]),
    razonSocial: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [
      Validators.required,
      this.numberValidator(/^9[0-9]{8}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    distritoNotificacion: new FormControl('', [Validators.required]),
    direccionNotificacion: new FormControl('', [Validators.required]),
    regimenTributario: new FormControl('', [Validators.required]),
  });

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
  goNext() {
    if (!this.ifErrors()) {
      return this.getSubmit.emit({
        action: 'submit',
        data: this.solicitanteForm.value,
      });
    }
    this.toast.error('Por favor complete todos los campos obligatorios');
  }

  searchRUC() {
    this.tramitesService
      .getContribuyenteByRUC(this.solicitanteForm.value.ruc!)
      .subscribe((data) => {
        this.solicitanteForm.setValue({
          ruc: this.solicitanteForm.value.ruc!,
          razonSocial: data.nombre,
          direccion: data.direccion,
          departamento: data.departamento,
          provincia: data.provincia,
          distrito: data.distrito,
          email: '',
          telefono: '',
          distritoNotificacion: '',
          direccionNotificacion: '',
          regimenTributario: '',
          tipoContribuyente: '',
        });
      });
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
    const errors = Object.keys(this.solicitanteForm.controls)
      .map((key) => {
        const controlErrors = this.solicitanteForm.get(key)!.errors;
        return controlErrors;
      })
      .reduce((a, b) => {
        return { ...a, ...b };
      });
    return errors;
  }

  numberValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return nameRe.test(control.value) ? null : { phoneNumber: true };
    };
  }
}
