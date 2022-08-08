import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CookieInterceptor } from './interceptors/cookie.interceptor';
import { HomeHeaderComponent } from './inicio/components/home-header/home-header.component';
import { HomeFooterComponent } from './inicio/components/home-footer/home-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TramitesComponent } from './tramites/tramites.component';
import { ActividadesEconomicasComponent } from './tramites/vista/actividades-economicas/actividades-economicas.component';
import { EstablecimientoComponent } from './tramites/vista/establecimiento/establecimiento.component';
import { SolicitanteComponent } from './tramites/vista/solicitante/solicitante.component';
import { TipoTramiteComponent } from './tramites/vista/tipo-tramite/tipo-tramite.component';
import { RequisitosAnexadosComponent } from './tramites/vista/requisitos-anexados/requisitos-anexados.component';
import { AgregarDocumentacionComponent } from './tramites/modals/agregar-documentacion/agregar-documentacion.component';
import { AgregarGirosComponent } from './tramites/modals/agregar-giros/agregar-giros.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/components/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard/components/dashboard-sidebar/dashboard-sidebar.component';
import { ValidarSolicitudComponent } from './dashboard/modals/validar-solicitud/validar-solicitud.component';
import { ValidarSolicitudesComponent } from './dashboard/solicitudes/validar-solicitudes/validar-solicitudes.component';
import { InformacionSolicitudComponent } from './dashboard/modals/informacion-solicitud/informacion-solicitud.component';
import { ValidarPagoModalComponent } from './dashboard/modals/validar-pago-modal/validar-pago-modal.component';
import { RechazarSolicitudComponent } from './dashboard/modals/rechazar-solicitud/rechazar-solicitud.component';
import { MostrarDocumentosComponent } from './dashboard/modals/mostrar-documentos/mostrar-documentos.component';
import { SearchPipe } from './pipes/search.pipe';
import { EvaluarRiesgoComponent } from './dashboard/modals/evaluar-riesgo/evaluar-riesgo.component';
import { MostrarPisosComponent } from './dashboard/modals/mostrar-pisos/mostrar-pisos.component';
import { MostrarGirosComponent } from './dashboard/modals/mostrar-giros/mostrar-giros.component';
import { GenerarLicenciaComponent } from './dashboard/modals/generar-licencia/generar-licencia.component';
import { InformesResolucionesComponent } from './dashboard/solicitudes/informes-resoluciones/informes-resoluciones.component';
import { RiesgoComponent } from './dashboard/defensa-civil/riesgo/riesgo.component';
import { InspeccionComponent } from './dashboard/defensa-civil/inspeccion/inspeccion.component';
import { RealizarInspeccionComponent } from './dashboard/modals/realizar-inspeccion/realizar-inspeccion.component';
import { UsuariosComponent } from './dashboard/gestion-usuario/usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './dashboard/modals/agregar-usuario/agregar-usuario.component';
import { MantenimientoRolComponent } from './dashboard/gestion-usuario/mantenimiento-rol/mantenimiento-rol.component';
import { ValidarPagoComponent } from './dashboard/tesoreria/validar-pago.component';
import { EstadoComponent } from './estado/estado.component';
import { ConsultarComponent } from './estado/vista/consultar/consultar.component';
import { DetallesComponent } from './estado/vista/detalles/detalles.component';
import { PagoComponent } from './estado/vista/pago/pago.component';
import { SubirVoucherComponent } from './estado/modals/subir-voucher/subir-voucher.component';

@NgModule({
  declarations: [
    FilterPipe,
    SearchPipe,
    AppComponent,
    NotFoundComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    LoginComponent,
    InicioComponent,
    TramitesComponent,
    ActividadesEconomicasComponent,
    EstablecimientoComponent,
    SolicitanteComponent,
    TipoTramiteComponent,
    RequisitosAnexadosComponent,
    AgregarDocumentacionComponent,
    AgregarGirosComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    ValidarSolicitudesComponent,
    InformacionSolicitudComponent,
    ValidarPagoModalComponent,
    RechazarSolicitudComponent,
    MostrarDocumentosComponent,
    ValidarSolicitudComponent,
    EvaluarRiesgoComponent,
    MostrarPisosComponent,
    MostrarGirosComponent,
    InformesResolucionesComponent,
    GenerarLicenciaComponent,
    RiesgoComponent,
    InspeccionComponent,
    RealizarInspeccionComponent,
    UsuariosComponent,
    AgregarUsuarioComponent,
    MantenimientoRolComponent,
    ValidarPagoComponent,
    EstadoComponent,
    ConsultarComponent,
    DetallesComponent,
    SubirVoucherComponent,
    PagoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CookieInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
