import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-giros',
  templateUrl: './agregar-giros.component.html',
  styleUrls: ['./agregar-giros.component.css'],
})
export class AgregarGirosComponent implements OnInit {
  @Input() actividadesEconomicas: any[] = [];
  @Input() selectedActividadesEconomicas: any[] = [];
  @Output() aeEmitter = new EventEmitter();
  codeToSearch = '';
  descriptionToSearch = '';

  constructor() {}
  ngOnInit(): void {}

  onClickAgregar() {
    // this.aeEmitter.emit(this.selectedActividadesEconomicas);
  }

  onChange(target: any, id: any) {
    if (target.checked) {
      if (this.selectedActividadesEconomicas.length < 3) {
        console.log(this.selectedActividadesEconomicas);
        this.selectedActividadesEconomicas.push(id);
      } else {
        target.checked = false;
      }
    } else if (this.selectedActividadesEconomicas.includes(id)) {
      this.selectedActividadesEconomicas.splice(
        this.selectedActividadesEconomicas.indexOf(id),
        1
      );
    }
  }
  seleccionarCositas(target: any, id: any):any {
    if (target.checked) {
     return this.selectedActividadesEconomicas.length < 3
        ? this.selectedActividadesEconomicas.push(id)
        : (target.checked = false);
    }
    this.selectedActividadesEconomicas.splice(
      this.selectedActividadesEconomicas.indexOf(id),
      1
    );
  }
}
