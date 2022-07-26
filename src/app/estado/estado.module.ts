import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './vista/consultar/consultar.component';
import { DetallesComponent } from './vista/detalles/detalles.component';
import { PagoComponent } from './vista/pago/pago.component';
import { EstadoRoutingModule } from './estado-routing.module';
import { FormsModule } from '@angular/forms';
import { SubirVoucherComponent } from './modals/subir-voucher/subir-voucher.component';



@NgModule({
  declarations: [
    ConsultarComponent,
    DetallesComponent,
    PagoComponent,
    SubirVoucherComponent
  ],
  imports: [
    CommonModule,
    EstadoRoutingModule,
    FormsModule
  ]
})
export class EstadoModule { }
