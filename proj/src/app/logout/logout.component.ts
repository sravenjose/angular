import { Component, OnInit } from '@angular/core';
import { RestuserService } from '../restuser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  id: string;
  constructor(private router: Router,public restUser: RestuserService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    console.log("Logout");
    this.restUser.logout();
    location.reload();
    this.router.navigate(['/landing']);
    
  }

}


