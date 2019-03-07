import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../toaster.service';
import { RestuserService } from '../restuser.service';
import { ActivatedRoute, Router } from '@angular/router';
  

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public restUser:RestuserService, private route: ActivatedRoute,
     private router: Router,private toast:ToasterService)
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
        this.toast.Success("Successful registration")
        this.restUser.register(this.registerForm.value).subscribe((result) => { 
        console.log(result);
        this.router.navigate(['/auth']);        
        }, (err) => {
        console.log(err);
        });
      }
    
    }

  
}


  
    
  

  