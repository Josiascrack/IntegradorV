import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegimenTributarioEnum } from 'src/app/enums/regimen.tributario.enum';
import { TipoContribuyenteEnum } from 'src/app/enums/tipo.contribuyente.enum';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';

@Component({
  selector: 'app-informacion-solicitud',
  templateUrl: './informacion-solicitud.component.html',
  styleUrls: ['./informacion-solicitud.component.css'],
})
export class InformacionSolicitudComponent implements OnInit {
  @Input() solicitud: any;
  @Output() closed: EventEmitter<void> = new EventEmitter();
  isGirosOpen: boolean = false;
  isPisosOpen: boolean = false;
  isDocumentosOpen: boolean = false;
  isValidarOpen: boolean = false;
  isRiesgoOpen: boolean = false;
  isValidarPagoOpen: boolean = false;
  isRechazarSolicitudOpen: boolean = false;
  tipotramite = TipoTramiteEnum;
  regimentributario = RegimenTributarioEnum;
  tipocontribuyente = TipoContribuyenteEnum;

  constructor() { }

  ngOnInit(): void {

  }

  closeModal() {
    this.closed.emit();
  }
  verPisos() {
    this.isPisosOpen = true;
  }
  verGiros() {
    this.isGirosOpen = true;
  }
  verDocumentos() {
    this.isDocumentosOpen = true;
  }

  cerrarModal() {
    this.isGirosOpen = false;
    this.isPisosOpen = false;
    this.isDocumentosOpen = false;
    this.isValidarOpen = false;
    this.isRiesgoOpen = false;
    this.isValidarPagoOpen = false;
    this.isRechazarSolicitudOpen = false;
  }
  validarSolicitud() {
    this.isValidarOpen = true;
  }
  evaluarSolicitud() {
    this.isRiesgoOpen = true;
  }
  rechazarSolicitud() {
    this.isRechazarSolicitudOpen = true;
  }
  validarPago() {
    this.isValidarPagoOpen = true;
  }
  cerrarValidacion(event: any) {
    event ? this.closeModal() : (this.isValidarOpen = false);
  }
  cerrarEvaluacion(event: any) {
    event ? this.closeModal() : (this.isRiesgoOpen = false);
  }
  cerrarPago(event: any) {
    event ? this.closeModal() : (this.isValidarPagoOpen = false);
  }
  cerrarRechazo(event: any) {
    event ? this.closeModal() : (this.isRechazarSolicitudOpen = false);
  }
}
