import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn
  }

}
