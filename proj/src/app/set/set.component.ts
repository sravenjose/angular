import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RestuserService } from '../restuser.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public restUser:RestuserService, private route: ActivatedRoute, private router: Router)
  { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          age: ['', Validators.required]
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
      }
    else {
    console.log(this.registerForm);
    this.restUser.updateUser(this.registerForm).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/auth/']);
      }, (err) => {
      console.log(err);
      } );
     }
  }
  

  // delete(obj) {
  //   let name = obj.name;
  //   this.restUser.deleteUser(name)
  //     .subscribe(result => {
  //       console.log(result);
  //       alert("profile updated")
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }
  

}
