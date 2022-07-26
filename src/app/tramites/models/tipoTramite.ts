interface TipoTramite {
  tipoLicencia: string;
  tipoTramite: string;
}

export class TipoTramiteDTO {
  tipoLicencia: string;
  tipoTramite: string;
  constructor(tipoTramite: TipoTramite) {
    this.tipoLicencia = tipoTramite.tipoLicencia || '';
    this.tipoTramite = tipoTramite.tipoTramite || '';
  }
}
