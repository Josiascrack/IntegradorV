interface Solicitud {
  tipoTramite: string;
  direccionNotificacion: string;
  distritoNotificacion: string;
  email: string;
  telefono: string;
}

export class SolcitudDTO {
  tipoTramite: string;
  direccionNotificacion: string;
  distritoNotificacion: string;
  email: string;
  telefono: string;
  constructor(solicitante: Solicitud) {
    this.tipoTramite = solicitante.tipoTramite || '';
    this.direccionNotificacion = solicitante.direccionNotificacion || '';
    this.distritoNotificacion = solicitante.distritoNotificacion || '';
    this.email = solicitante.email || '';
    this.telefono = solicitante.telefono || '';
  }
}
