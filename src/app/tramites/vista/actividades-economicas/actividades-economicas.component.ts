import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TramitesService } from 'src/app/servicios/tramites.service';

@Component({
  selector: 'actividades-economicas',
  templateUrl: './actividades-economicas.component.html',
  styleUrls: ['./actividades-economicas.component.css'],
})
export class ActividadesEconomicasComponent implements OnInit {
  @Output() getSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() preload: any;
  selectedActividadesEconomicas: any[] = [];
  actividadesEconomicas: any[] = [];

  constructor(
    private router: Router,
    private tramitesService: TramitesService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {

    this.tramitesService.getActividadesEconomicas().subscribe((data) => {
      this.actividadesEconomicas = data;
      this.selectedActividadesEconomicas =
        this.preload.selectedActividadesEconomicas || [];
    });
  }

  goHome() {
    this.getSubmit.emit({
      action: 'home',
    });
  }
  goBack() {
    this.getSubmit.emit({
      action: 'back',
    });
  }
  goNext() {
    console.log(this.selectedActividadesEconomicas)
    if (this.selectedActividadesEconomicas.length > 0) {
      return this.getSubmit.emit({
        action: 'submit',
        data: {
          selectedActividadesEconomicas: this.selectedActividadesEconomicas,
        },
      });
    }
    this.toast.error('Debe seleccionar al menos una actividad económica');
  }

  getSelected() {
    return this.actividadesEconomicas.filter((d) =>
      this.selectedActividadesEconomicas.includes(d.id_acteconomico)
    );
  }

  deleteSelected(id: any) {
    this.selectedActividadesEconomicas.splice(
      this.selectedActividadesEconomicas.indexOf(id),
      1
    );
  }
}
