import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionDataModel } from 'src/app/models/security/session-data.model';
import { SecurityService } from 'src/app/services/shared/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeSession: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
    this.subscription = this.securityService.GetSessionInfo().subscribe({
      next: (data: SessionDataModel) => {
        this.activeSession = data.isLoggedIn;
      },
      error: (err: any) => {
        console.log(err.message)
      }
    });
  }


}