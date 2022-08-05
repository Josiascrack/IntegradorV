import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarIsOpen:boolean=false;

  modules:any[]=[]
  constructor(private loginService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getModules().subscribe(data=>{
      this.modules = data
      this.routeToMenu(this.modules[0].ruta)
    })
    
  }

  routeToMenu(route:string){
    console.log(route)
    this.router.navigate([`/admin/${route}`])
  }



}
