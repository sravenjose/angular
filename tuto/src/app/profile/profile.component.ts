import { Component, OnInit,Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users:any = [];

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  add() {
    this.router.navigate(['/user-add']);
  }

  delete(obj) {
    let name = obj.name;
    // console.log(name)
    this.rest.deleteUser(name)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

  
}
