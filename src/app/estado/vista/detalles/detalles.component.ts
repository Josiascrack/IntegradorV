import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoTramiteEnum } from 'src/app/enums/tipo.tramite.enum';
import { ConsultasService } from 'src/app/servicios/consultas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private consultasService: ConsultasService
  ) {}
  isUploadOpen: boolean = false;
  solicitud: any = {};
  tipoT = TipoTramiteEnum
  ngOnInit(): void {
    console.log(this.router);
    this.aRoute.params.subscribe((data) => {
      this.consultasService
        .getSolicitudByCodigoEvaluada(data.codigo)
        .subscribe((data) => {
          if (Object.keys(data).length > 0) {
            console.log('existe');
            this.solicitud = data;
          } else {
            this.goBack();
          }
        });
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/estado-tramite/consultar']);
  }

  goNext() {
    this.isUploadOpen = true;
    // this.router.navigate(['/estado-tramite/pago']);
  }

  closedModal(event: any) {
    event ? this.goHome() : (this.isUploadOpen = false);
  }
}
