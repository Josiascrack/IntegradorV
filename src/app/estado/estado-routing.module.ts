import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './vista/consultar/consultar.component';
import { DetallesComponent } from './vista/detalles/detalles.component';
import { PagoComponent } from './vista/pago/pago.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path:'consultar',
          component:ConsultarComponent
        },
        {
          path:'detalles/:codigo',
          component:DetallesComponent
        },
        {
          path:'pago',
          component:PagoComponent
        },
        {
          path:'**',
          redirectTo:'consultar'
        }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EstadoRoutingModule { }
