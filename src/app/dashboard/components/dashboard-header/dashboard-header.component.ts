import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter();
  @Input() dropIsShowed: boolean = false;
  user: any;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  onToggle() {
    this.toggleEvent.emit();
  }
  logOut() {
    this.authService.logOut().subscribe((data) => {
      this.router.navigate(['/login']);
    });
    this.authService.modules = [];
  }
  getUser() {
    this.authService.getProfile().subscribe((data) => {
      console.log(data)

      this.user = data;
    });
  }
}
