interface Establecimiento {
  direccionEstablecimiento: string;
  numeroEstablecimiento: string;
  letraEstablecimiento: string;
  intEstablecimiento: string;
  letintEstablecimiento: string;
  mzEstablecimiento: string;
  loteEstablecimiento: string;
  bloqueEstablecimiento: string;
  dptoEstablecimiento: string;
  nucleoEstablecimiento: string;
  tipoEstablecimiento: string;
  clasificacionEstablecimiento: string;
  zonificacionEstablecimiento: string;
  aforoEstablecimiento: string;
  antiguedadEstablecimiento: string;
  nomComercialEstablecimiento: string;
  nEmpleadosEstablecimiento: string;
  referenciaEstablecimiento: string;
  nPisosEstablecimiento: string;
}

export class EstablecimientoDTO {
  direccionEstablecimiento: string;
  numeroEstablecimiento: string;
  letraEstablecimiento: string;
  intEstablecimiento: string;
  letintEstablecimiento: string;
  mzEstablecimiento: string;
  loteEstablecimiento: string;
  bloqueEstablecimiento: string;
  dptoEstablecimiento: string;
  nucleoEstablecimiento: string;
  tipoEstablecimiento: string;
  clasificacionEstablecimiento: string;
  zonificacionEstablecimiento: string;
  aforoEstablecimiento: string;
  antiguedadEstablecimiento: string;
  nomComercialEstablecimiento: string;
  nEmpleadosEstablecimiento: string;
  referenciaEstablecimiento: string;
  nPisosEstablecimiento: string;
  constructor(establecimiento: Establecimiento) {
    this.direccionEstablecimiento =
      establecimiento.direccionEstablecimiento || '';
    this.numeroEstablecimiento = establecimiento.numeroEstablecimiento || '';
    this.letraEstablecimiento = establecimiento.letraEstablecimiento || '';
    this.intEstablecimiento = establecimiento.intEstablecimiento || '';
    this.letintEstablecimiento = establecimiento.letintEstablecimiento || '';
    this.mzEstablecimiento = establecimiento.mzEstablecimiento || '';
    this.loteEstablecimiento = establecimiento.loteEstablecimiento || '';
    this.bloqueEstablecimiento = establecimiento.bloqueEstablecimiento || '';
    this.dptoEstablecimiento = establecimiento.dptoEstablecimiento || '';
    this.nucleoEstablecimiento = establecimiento.nucleoEstablecimiento || '';
    this.tipoEstablecimiento = establecimiento.tipoEstablecimiento || '';
    this.clasificacionEstablecimiento =
      establecimiento.clasificacionEstablecimiento || '';
    this.zonificacionEstablecimiento =
      establecimiento.zonificacionEstablecimiento || '';
    this.aforoEstablecimiento = establecimiento.aforoEstablecimiento || '';
    this.antiguedadEstablecimiento =
      establecimiento.antiguedadEstablecimiento || '';
    this.nomComercialEstablecimiento =
      establecimiento.nomComercialEstablecimiento || '';
    this.nEmpleadosEstablecimiento =
      establecimiento.nEmpleadosEstablecimiento || '';
    this.referenciaEstablecimiento =
      establecimiento.referenciaEstablecimiento || '';
    this.nPisosEstablecimiento = establecimiento.nPisosEstablecimiento || '';
  }
}
