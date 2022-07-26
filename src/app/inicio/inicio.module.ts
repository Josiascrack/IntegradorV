import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { CabezalComponent } from './components/cabezal/cabezal.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SplashComponent } from './vista/splash/splash.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent, CabezalComponent, PiepaginaComponent, SplashComponent],
  imports: [CommonModule,InicioRoutingModule],
})
export class InicioModule {}
