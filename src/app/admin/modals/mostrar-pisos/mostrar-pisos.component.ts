import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-mostrar-pisos',
  templateUrl: './mostrar-pisos.component.html',
  styleUrls: ['./mostrar-pisos.component.css'],
})
export class MostrarPisosComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Input() id_establecimiento: any;
  pisos: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService
      .getPisosEstablecimiento(this.id_establecimiento)
      .subscribe((pisos) => {
        console.log(pisos)
        this.pisos = pisos;
      });
  }
  closeModal() {
    this.closed.emit();
  }
}
