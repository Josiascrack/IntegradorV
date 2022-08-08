import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
})
export class DashboardSidebarComponent implements OnInit {
  @Input() sidebarIsOpen: boolean = false;

  modules: any[] = [];
  constructor(private loginService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.getModules().subscribe((data) => {
      this.modules = data;
    });
    
  }

  routeToMenu(route: string) {
    this.router.navigate([`/dashboard/${route}`]);
  }
}
