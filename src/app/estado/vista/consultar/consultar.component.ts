import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from 'src/app/servicios/consultas.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  solicitudes: any[] = [];

  codigo: string = '';
  isSearching: boolean = false;
  constructor(
    private router: Router,
    private consultasService: ConsultasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/']);
  }

  searchByRuc() {
    this.consultasService.getSolicitudesByRuc(this.codigo).subscribe((data) => {
      this.solicitudes = data;
      console.log(this.solicitudes);
    });
  }
  searchByCodigo() {
    if (this.codigo.length == 10) {
      this.isSearching = true;
      this.solicitudes = [];
      this.consultasService
        .getSolicitudesByCodigo(this.codigo)
        .subscribe((data) => {
          if (data.length == 0) {
            this.isSearching = false;
            this.toastr.error('No se encontraron resultados');
          } else {
            this.solicitudes = data;
          }
        });
    } else {
      this.toastr.error('El código debe tener 10 dígitos');
    }
  }
  goToUpload() {
    console.log(this.codigo);
    this.router.navigate(['/estado-tramite/detalles', this.codigo]);
  }
}
