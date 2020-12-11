import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
