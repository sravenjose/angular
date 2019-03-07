import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnInit {


  @Input() userData = { f_name:'', f_email: '', f_password: '',f_age: 0 };

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    console.log(this.userData);
    this.rest.addUser(this.userData).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/users/']);
    }, (err) => {
      console.log(err);
    });
  }

}