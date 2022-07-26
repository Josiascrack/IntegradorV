import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { EstablecimientoDTO } from '../tramites/models/establecimiento';
import { SolicitanteDTO } from '../tramites/models/solicitante';
import { SolcitudDTO } from '../tramites/models/solicitud';
import { apiURL } from './global';
@Injectable({
  providedIn: 'root',
})
export class TramitesService {
  constructor(private http: HttpClient) {}

  getContribuyenteByRUC(ruc: string): Observable<any> {
    return this.http.get(`${apiURL}/contribuyente/ruc/${ruc}`);
  }

  getCaptcha(): Observable<any> {
    return this.http.get(`${apiURL}/contribuyente/captcha`);
  }
  getActividadesEconomicas(): Observable<any> {
    return this.http.get<any>(
      `${apiURL}/solicitud_actividad_economico/obtener_actividad_economico`
    );
  }

  getTipoDocumentos(): Observable<any> {
    return this.http.get<any>(
      `${apiURL}/solicitud_documento/obtener_tipo_documentos`
    );
  }

  saveFile(file: any): Observable<any> {
    return this.http.post<any>(`${apiURL}/images/upload`, file);
  }

  saveSolicitud_Documentos(solicitud_documento: any): Observable<any> {
    return this.http.post<any>(
      `${apiURL}/solicitud_documento/insertSolicitud_Documentos`,
      solicitud_documento
    );
  }

  uploadDocuments(
    formData: FormData,
    id_solicitud: number,
    codigo: string
  ): Observable<any> {
    return this.http.post<any>(
      `${apiURL}/files/documentos/${id_solicitud}/${codigo}`,
      formData
    );
  }

  insertSolicitante(solicitante: SolicitanteDTO): Observable<any> {
    return this.http.post<any>(
      `${apiURL}/contribuyente/insertContribuyente`,
      solicitante
    );
  }

  insertEstablecimiento(
    establecimiento: EstablecimientoDTO,
    id_contribuyente: number,
    areaEstablecimiento: number
  ) {
    return this.http.post<any>(
      `${apiURL}/establecimiento/insertEstablecimiento`,
      {
        ...establecimiento,
        id_contribuyente,
        areaEstablecimiento,
      }
    );
  }

  insertActividadesEconomicas(
    actividadesEconomicas: any,
    id_establecimiento: number
  ) {
    return this.http.post<any>(
      `${apiURL}/solicitud_actividad_economico/bulk/${id_establecimiento}`,
      {
        actividadesEconomicas,
      }
    );
  }

  insertSolicitud(
    solicitud: SolcitudDTO,
    id_contribuyente: number,
    id_establecimiento: number
  ): Observable<any> {
    return this.http.post<any>(`${apiURL}/solicitud/insertSolicitud`, {
      ...solicitud,
      id_contribuyente,
      id_establecimiento,
    });
  }
  insertPisosEstablecimiento(pisos: any, id_establecimiento: any) {
    return this.http.post<any>(
      `${apiURL}/establecimientoPisos/establecimiento/${id_establecimiento}`,
      { pisos }
    );
  }
}
