import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/core/entities/user/user';
import { AuthenticationService } from 'src/core/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
