interface Solicitante {
  tipoContribuyente: string;
  ruc: string;
  razonSocial: string;
  provincia: string;
  departamento: string;
  distrito: string;
  direccion: string;
  telefono: string;
  email: string;
  distritoNotificacion: string;
  direccionNotificacion: string;
  regimenTributario: string;
}

export class SolicitanteDTO {
  tipoContribuyente: string;
  ruc: string;
  razonSocial: string;
  provincia: string;
  departamento: string;
  distrito: string;
  direccion: string;
  telefono: string;
  email: string;
  distritoNotificacion: string;
  direccionNotificacion: string;
  regimenTributario: string;
  constructor(solicitante: Solicitante) {
    this.tipoContribuyente = solicitante.tipoContribuyente || '';
    this.ruc = solicitante.ruc || '';
    this.razonSocial = solicitante.razonSocial || '';
    this.provincia = solicitante.provincia || '';
    this.departamento = solicitante.departamento || '';
    this.distrito = solicitante.distrito || '';
    this.direccion = solicitante.direccion || '';
    this.telefono = solicitante.telefono || '';
    this.email = solicitante.email || '';
    this.distritoNotificacion = solicitante.distritoNotificacion || '';
    this.direccionNotificacion = solicitante.direccionNotificacion || '';
    this.regimenTributario = solicitante.regimenTributario || '';
  }
}
