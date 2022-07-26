import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  constructor(private http: HttpClient) {}

  getSolicitudesByRuc(ruc: string): Observable<any[]> {
    return this.http.get<any[]>(`${apiURL}/contribuyente/solicitudes/${ruc}`);
  }
  getSolicitudesByCodigo(codigo: string) {
    return this.http.get<any[]>(`${apiURL}/solicitud/codigo/${codigo}`);
  }
  getSolicitudByCodigoEvaluada(codigo: string) {
    return this.http.get<any>(`${apiURL}/solicitud/codigo/${codigo}/evaluada`);
  }
  getSolicitudByCodigoPagada(codigo: string) {
    return this.http.get<any>(`${apiURL}/solicitud/codigo/${codigo}/pagada`);
  }
  uploadPagoVoucher(codigo: string, file: File) {
    const formData = new FormData();
    formData.append('voucher', file);
    return this.http.post<any>(`${apiURL}/files/voucher/${codigo}`, formData);
  }
}
