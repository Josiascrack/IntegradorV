import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AgregarUsuarioComponent } from './modals/agregar-usuario/agregar-usuario.component';
import { UsuariosComponent } from './gestion-usuario/usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidarPagoComponent } from './tesoreria/validar-pago.component';
import { ValidarSolicitudesComponent } from './solicitudes/validar-solicitudes/validar-solicitudes.component';
import { InformesResolucionesComponent } from './solicitudes/informes-resoluciones/informes-resoluciones.component';
import { RiesgoComponent } from './defensa-civil/riesgo/riesgo.component';
import { MantenimientoRolComponent } from './gestion-usuario/mantenimiento-rol/mantenimiento-rol.component';
import { SearchPipe } from '../pipes/search.pipe';
import { InformacionSolicitudComponent } from './modals/informacion-solicitud/informacion-solicitud.component';
import { MostrarPisosComponent } from './modals/mostrar-pisos/mostrar-pisos.component';
import { MostrarGirosComponent } from './modals/mostrar-giros/mostrar-giros.component';
import { ValidarSolicitudComponent } from './modals/validar-solicitud/validar-solicitud.component';
import { RechazarSolicitudComponent } from './modals/rechazar-solicitud/rechazar-solicitud.component';
import { MostrarDocumentosComponent } from './modals/mostrar-documentos/mostrar-documentos.component';

import { EvaluarRiesgoComponent } from './modals/evaluar-riesgo/evaluar-riesgo.component';
import { ValidarPagoModalComponent } from './modals/validar-pago-modal/validar-pago-modal.component';
import { GenerarLicenciaComponent } from './modals/generar-licencia/generar-licencia.component';
import { InspeccionComponent } from './defensa-civil/inspeccion/inspeccion.component';
import { RealizarInspeccionComponent } from './modals/realizar-inspeccion/realizar-inspeccion.component';
import { EditarUsuarioComponent } from './modals/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    AdminComponent,
    AgregarUsuarioComponent,
    UsuariosComponent,
    ValidarPagoComponent,
    ValidarSolicitudesComponent,
    InformesResolucionesComponent,
    RiesgoComponent,
    MantenimientoRolComponent,
    SearchPipe,
    InformacionSolicitudComponent,
    MostrarPisosComponent,
    MostrarGirosComponent,
    ValidarSolicitudComponent,
    RechazarSolicitudComponent,
    MostrarDocumentosComponent,
    EvaluarRiesgoComponent,
    ValidarPagoModalComponent,
    GenerarLicenciaComponent,
    InspeccionComponent,
    RealizarInspeccionComponent,
    EditarUsuarioComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
