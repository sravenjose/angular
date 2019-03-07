import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  @Input() userData = { f_name:'', f_email: '', f_password: '',f_age: 0 };

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    console.log(this.userData);
    this.rest.updateUser(this.userData).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/users/']);
    }, (err) => {
      console.log(err);
    });
  }


}
