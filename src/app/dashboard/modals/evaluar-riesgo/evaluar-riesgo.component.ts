import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-evaluar-riesgo',
  templateUrl: './evaluar-riesgo.component.html',
  styleUrls: ['./evaluar-riesgo.component.css'],
})
export class EvaluarRiesgoComponent implements OnInit {
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id_solicitud: any;

  riesgos: any[] = [];
  rNiv: any = '';
  constructor(
    private adminService: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.adminService.getTiposRiesgos().subscribe((data) => {
      console.log(data);
      this.riesgos = data;
    });
  }
  evaluarSolicitud() {
    console.log(this.rNiv);
    if (this.rNiv) {
      this.adminService
        .evaluarRiesgo(this.rNiv, this.id_solicitud)
        .subscribe((data) => {
          this.toast.success('Solicitud evaluada con éxito');
          this.closeModal(true);
        });
    } else {
      this.toast.error('Debe seleccionar un riesgo');
    }
    //this.closed.emit(true);
  }
  closeModal(st: boolean) {
    this.closed.emit(st);
  }
}
