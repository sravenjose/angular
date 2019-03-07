import { Component, OnInit,Input} from '@angular/core';
import { RestuserService } from '../restuser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 
  registerForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted = false;

  constructor(private formBuilder: FormBuilder,public restUser:RestuserService, private route: ActivatedRoute,
     private router: Router,private toast:ToasterService){
          }

  ngOnInit() {
      
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
      this.restUser.logout();
      
  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    else {
      console.log(this.registerForm.value)
      this.restUser.login(this.registerForm.value).subscribe((result) => { 
        if(result==200){
        this.toast.Success("Logged In")
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.email.value);
        this.router.navigate(['/courses']);
        }else
        {
          this.toast.Error("Unsuccessful Log in")
        }
        location.reload();
      
    }, (err) => {
      console.log(err);
      });
    }
  
  }

}
