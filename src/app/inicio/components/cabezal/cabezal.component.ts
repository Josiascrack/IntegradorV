import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabezal',
  templateUrl: './cabezal.component.html',
  styleUrls: ['./cabezal.component.css']
})
export class CabezalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectHome(route:string){
    this.router.navigate([`${route}`])
  }

}
