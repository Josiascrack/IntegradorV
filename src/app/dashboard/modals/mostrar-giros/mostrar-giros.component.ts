import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-mostrar-giros',
  templateUrl: './mostrar-giros.component.html',
  styleUrls: ['./mostrar-giros.component.css'],
})
export class MostrarGirosComponent implements OnInit {
  @Input() id_establecimiento: any;
  @Output() closed: EventEmitter<void> = new EventEmitter();
  giros: any[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService
      .getActividadesEstablecimiento(this.id_establecimiento)
      .subscribe((data) => {
        this.giros = data;
      });
  }

  closeModal() {
    this.closed.emit();
  }
}
