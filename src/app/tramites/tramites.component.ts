import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TramitesService } from '../servicios/tramites.service';
import { EstablecimientoDTO } from './models/establecimiento';
import { SolicitanteDTO } from './models/solicitante';
import { SolcitudDTO } from './models/solicitud';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css'],
})
export class TramitesComponent implements OnInit {
  activeMenu = 1;
  data: any = {};
  isUploading = false;
  constructor(
    private router: Router,
    private tramitesServices: TramitesService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  childItems(item: any) {
    if (item.action == 'home') {
      this.router.navigate(['/']);
    } else if (item.action == 'submit') {
      this.activeMenu++;
      this.data = { ...this.data, ...item.data };
    } else if (item.action == 'back') {
      this.activeMenu--;
    } else if (item.action == 'end') {
      this.data = { ...this.data, ...item.data };
      console.log(this.data);
      this.isUploading = true;
      const { savedFiles, ...rest } = this.data;
      this.tramitesServices.uploadDocuments(rest, savedFiles).subscribe(
        (data) => {
          this.isUploading = false;

          this.toast.success('Solicitud subida con éxito');
          this.router.navigate(['/']);
        },
        (err) => {
          this.isUploading = false;

          this.toast.error('Error Al Realizar la solicitud ', err.message);
        }
      );
      //   this.tramitesServices
      //     .insertSolicitante(new SolicitanteDTO(this.data as SolicitanteDTO))
      //     .subscribe((solicitante) => {
      //       this.uploadStatus = 'Subiendo Establecimiento';

      //       this.tramitesServices
      //         .insertEstablecimiento(
      //           new EstablecimientoDTO(this.data as EstablecimientoDTO),
      //           solicitante[0]['id_contribuyente'],
      //           this.data.pisos.reduce((a: any, b: any) => a + b, 0)
      //         )
      //         .subscribe((establecimiento) => {
      //           this.uploadStatus = 'Subiendo Pisos';

      //           this.tramitesServices
      //             .insertPisosEstablecimiento(
      //               this.data.pisos,
      //               establecimiento[0]['id_establecimiento']
      //             )
      //             .subscribe((pisos) => {
      //               this.uploadStatus = 'Subiendo Actividad Economica';

      //               this.tramitesServices
      //                 .insertActividadesEconomicas(
      //                   this.data.selectedActividadesEconomicas,
      //                   establecimiento[0]['id_establecimiento']
      //                 )
      //                 .subscribe((actEc) => {
      //                   this.uploadStatus = 'Subiendo Solicitud';

      //                   this.tramitesServices
      //                     .insertSolicitud(
      //                       new SolcitudDTO(this.data as SolcitudDTO),
      //                       solicitante[0]['id_contribuyente'],
      //                       establecimiento[0]['id_establecimiento']
      //                     )
      //                     .subscribe((solicitud) => {
      //                       this.uploadStatus = 'Subiendo Archivos';
      //                       console.log(solicitud);
      //                       const formData = new FormData();
      //                       this.data.savedFiles.forEach((element: any) => {
      //                         formData.append(element.id_tipodoc, element.file);
      //                       });
      //                       this.tramitesServices
      //                         .uploadDocuments(
      //                           formData,
      //                           solicitud['id_solicitud'],
      //                           solicitud['codigo_solicitud']
      //                         )
      //                         .subscribe((data) => {
      //                           this.uploadStatus = 'Finalizado';

      //                           console.log(data);
      //                         });
      //                     });
      //                 });
      //             });
      //         });
      //     });
      // }
      //
    }
  }
}
