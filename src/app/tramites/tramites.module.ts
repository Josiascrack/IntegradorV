import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesRoutingModule } from './tramites-routing.module';
import { TipoTramiteComponent } from './vista/tipo-tramite/tipo-tramite.component';
import { TramitesComponent } from './tramites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatossolicitanteComponent } from './vista/datossolicitante/datossolicitante.component';
import { DatosestablecimientoComponent } from './vista/datosestablecimiento/datosestablecimiento.component';
import { RequisitosanexadosComponent } from './vista/requisitosanexados/requisitosanexados.component';
import { ActividadeseconomicasComponent } from './vista/actividadeseconomicas/actividadeseconomicas.component';
import { VerificarDatosCompletosComponent } from './modals/verificar-datos-completos/verificar-datos-completos.component';
import { AgregarGirosComponent } from './modals/agregar-giros/agregar-giros.component';
import { AgregarDocumentacionComponent } from './modals/agregar-documentacion/agregar-documentacion.component';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    TramitesComponent,
    DatosestablecimientoComponent,
    TipoTramiteComponent,
    DatossolicitanteComponent,
    RequisitosanexadosComponent,
    ActividadeseconomicasComponent,
    VerificarDatosCompletosComponent,
    AgregarGirosComponent,
    AgregarDocumentacionComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    TramitesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TramitesModule {}
