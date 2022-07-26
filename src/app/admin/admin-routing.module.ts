import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InspeccionComponent } from './defensa-civil/inspeccion/inspeccion.component';
import { RiesgoComponent } from './defensa-civil/riesgo/riesgo.component';
import { MantenimientoRolComponent } from './gestion-usuario/mantenimiento-rol/mantenimiento-rol.component';
import { UsuariosComponent } from './gestion-usuario/usuarios/usuarios.component';
import { InformesResolucionesComponent } from './solicitudes/informes-resoluciones/informes-resoluciones.component';
import { ValidarSolicitudesComponent } from './solicitudes/validar-solicitudes/validar-solicitudes.component';
import { ValidarPagoComponent } from './tesoreria/validar-pago.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'validar-pago', component: ValidarPagoComponent },
      { path: 'resoluciones', component: InformesResolucionesComponent },
      { path: 'validar-solicitud', component: ValidarSolicitudesComponent },
      { path: 'mantenimiento-rol', component: MantenimientoRolComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'inspeccion', component: InspeccionComponent },
      { path: 'riesgo', component: RiesgoComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
