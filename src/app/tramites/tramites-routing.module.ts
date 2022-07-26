import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatossolicitanteComponent } from './vista/datossolicitante/datossolicitante.component';
import { DatosestablecimientoComponent } from './vista/datosestablecimiento/datosestablecimiento.component';
import { ActividadeseconomicasComponent } from './vista/actividadeseconomicas/actividadeseconomicas.component';
import { RequisitosanexadosComponent } from './vista/requisitosanexados/requisitosanexados.component';
import { TramitesComponent } from './tramites.component';
import { TipoTramiteComponent } from './vista/tipo-tramite/tipo-tramite.component';

const routes: Routes = [
  {
    path: '',
    component:TramitesComponent,
    children: [
      {
        path: 'tipo-tramites',
        component: TipoTramiteComponent,
      },
      {
        path: 'datos-solicitante',
        component: DatossolicitanteComponent,
      },
      {
        path: 'datos-establecimiento',
        component: DatosestablecimientoComponent,
      },
      {
        path: 'actividades-economicas',
        component: ActividadeseconomicasComponent,
      },
      {
        path: 'requisitos-anexados',
        component: RequisitosanexadosComponent,
      },
      {
        path: '**',
        redirectTo: 'tipo-tramites',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class TramitesRoutingModule {}
