import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RestuserService } from '../restuser.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn$:boolean;
    
  constructor(private restUser: RestuserService,private router: Router) { 
   
  }

  ngOnInit() {
    if( localStorage.getItem('isLoggedIn') == "false"){
      this.router.navigate(['/landing']);
     }
     this.isLoggedIn$ = this.restUser.isLoggedIn(); 
     
  }

}
