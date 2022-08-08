import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InspeccionComponent } from './dashboard/defensa-civil/inspeccion/inspeccion.component';
import { RiesgoComponent } from './dashboard/defensa-civil/riesgo/riesgo.component';
import { MantenimientoRolComponent } from './dashboard/gestion-usuario/mantenimiento-rol/mantenimiento-rol.component';
import { UsuariosComponent } from './dashboard/gestion-usuario/usuarios/usuarios.component';
import { InformesResolucionesComponent } from './dashboard/solicitudes/informes-resoluciones/informes-resoluciones.component';
import { ValidarSolicitudesComponent } from './dashboard/solicitudes/validar-solicitudes/validar-solicitudes.component';
import { ValidarPagoComponent } from './dashboard/tesoreria/validar-pago.component';
import { EstadoComponent } from './estado/estado.component';
import { ConsultarComponent } from './estado/vista/consultar/consultar.component';
import { DetallesComponent } from './estado/vista/detalles/detalles.component';
import { PagoComponent } from './estado/vista/pago/pago.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { InicioComponent } from './inicio/inicio.component';
import { SplashComponent } from './inicio/vista/splash/splash.component';
import { LoginComponent } from './login/login.component';
import { TramitesComponent } from './tramites/tramites.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: SplashComponent,
      },
      {
        path: 'tramites',
        component: TramitesComponent,
      },
      {
        path: 'estado-tramite',
        component: EstadoComponent,

        children: [
          { path: 'consultar', component: ConsultarComponent },
          {
            path: 'detalles/:codigo',
            component: DetallesComponent,
          },
          { path: 'pago', component: PagoComponent },
        ],
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [RoleGuard],
    children: [
      {
        path: 'validar-solicitud',
        component: ValidarSolicitudesComponent,
      },
      {
        path: 'resoluciones',
        component: InformesResolucionesComponent,
      },
      {
        path: 'riesgo',
        component: RiesgoComponent,
      },
      {
        path: 'inspeccion',
        component: InspeccionComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'mantenimiento-rol',
        component: MantenimientoRolComponent,
      },
      {
        path: 'validar-pago',
        component: ValidarPagoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
