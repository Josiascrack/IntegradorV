import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter();
  @Input() dropIsShowed: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onToggle() {
    this.toggleEvent.emit();
  }
  logOut() {
    this.authService.logOut().subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }
  getUser() {
    return 'Juanito';
  }
}
