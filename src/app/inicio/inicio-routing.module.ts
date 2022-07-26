import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InicioComponent } from './inicio.component';
import { SplashComponent } from './vista/splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,

    children: [
      { path: '', component: SplashComponent },
      {
        path: 'estado-tramite',
        loadChildren: () =>
          import('../estado/estado.module').then(
            (estado) => estado.EstadoModule
          ),
      },
      {
        path: 'tramites',
        loadChildren: () =>
          import('../tramites/tramites.module').then(
            (tramites) => tramites.TramitesModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
    import('../login/login.module').then(
      (login) => login.LoginModule
    ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((admin) => admin.AdminModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
