import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${apiURL}/users/user`);
  }
  getRoles(): Observable<any> {
    return this.http.get<any>(`${apiURL}/users/roles`);
  }
  createRole(rol: string, accesos: any[]): Observable<any> {
    return this.http.post<any>(`${apiURL}/users/roles`, {
      rol,
      accesos,
    });
  }
  deleteRole(id: number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/users/roles/${id}`);
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${apiURL}/users/user`, user);
  }

  getAllAccess(): Observable<any> {
    return this.http.get<any>(`${apiURL}/users/access/all`);
  }

  getAccessById(id: number) {
    return this.http.get<any>(`${apiURL}/users/access/unique/${id}`);
  }

  getSolicitudesRegistradas(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/registradas`);
  }
  getSolicitudesValidadas(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/validadas`);
  }
  getSolicitudesRiesgosEvaluados(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/riesgos_evaluados`);
  }
  getSolicitudesPagadas(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/pagadas`);
  }
  getSolicitudesPagadasValidadas(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/pagadas_validadas`);
  }
  getSolicitudesEmitidas(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/emitidas`);
  }
  getSolicitudesInspeccion(): Observable<any> {
    return this.http.get<any>(`${apiURL}/solicitud/inspeccion`);
  }

  getActividadesEstablecimiento(id: number) {
    return this.http.get<any>(`${apiURL}/establecimiento/actividad/${id}`);
  }
  getPisosEstablecimiento(id: number) {
    return this.http.get<any>(
      `${apiURL}/establecimientoPisos/establecimiento/${id}`
    );
  }
  getDocumentosBySolicitud(id: number) {
    return this.http.get<any>(`${apiURL}/solicitud_documento/solicitud/${id}`);
  }
  validarSolicitud(id: number) {
    return this.http.put<any>(`${apiURL}/solicitud/validar`, {
      id_solicitud: id,
    });
  }

  getTiposRiesgos() {
    return this.http.get<any>(`${apiURL}/niveles_riesgo`);
  }

  evaluarRiesgo(id_riesgo: any, id_solicitud: any) {
    return this.http.put<any>(
      `${apiURL}/niveles_riesgo/solicitud/${id_solicitud}`,
      {
        id_riesgo,
      }
    );
  }
  validarPago(codigo: number) {
    return this.http.put<any>(`${apiURL}/solicitud/validar_pago`, {
      codigo,
    });
  }

  generarLicencia(datosLicencia: any) {
    const formData = new FormData();
    Object.keys(datosLicencia).forEach((key) => {
      formData.append(key, datosLicencia[key]);
    });

    return this.http.post<any>(`${apiURL}/files/licencia`, formData);
  }
  realizarInspeccion(inspeccion: any) {
    console.log(inspeccion);
    const formData = new FormData();
    Object.keys(inspeccion).forEach((key) => {
      formData.append(key, inspeccion[key]);
    });
    return this.http.post<any>(`${apiURL}/files/inspeccion`, formData);
  }

  updateUser(usuario: any) {
    return this.http.put<any>(
      `${apiURL}/users/user/${usuario.id_usuario}`,
      usuario
    );
  }
  deleteUser(id_usuario: any) {
    return this.http.delete<any>(`${apiURL}/users/user/${id_usuario}`);
  }

  rechazarSolicitud(id_solicitud: any, motivo: any) {
    return this.http.put<any>(`${apiURL}/solicitud/rechazar/${id_solicitud}`, {
      motivo,
    });
  }

  rechazarPago(id_solicitud: any, motivo: any) {
    return this.http.put<any>(`${apiURL}/solicitud/pago/${id_solicitud}`, {
      motivo,
    });
  }
}
