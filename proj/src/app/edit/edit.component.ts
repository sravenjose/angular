import { Component, OnInit ,Input,AfterViewInit} from '@angular/core';
import { RestcourseService } from '../restcourse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  @Input() course:any={name:'',link:'',duration:0,price:0};

  // courses:any[];
  courseForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public restCourse:RestcourseService, private route: ActivatedRoute, private router: Router)
  {
  
   }


  ngOnInit() {
      this.courseForm = this.formBuilder.group({
          name: ['', Validators.required],
          link: ['', Validators.required],
          duration: ['', Validators.required],
          price: ['', Validators.required]
      });

      const name = this.route.snapshot.params.course;
      this.restCourse.getCourse(name).subscribe((data) => {
      this.course = data[0];
      console.log(this.course);
      })
      
     
  }
 
  get f() { return this.courseForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.courseForm.invalid) {
        return;
    }
    else {
      this.restCourse.updateCourse(this.courseForm.value).subscribe((result) => { 
      console.log(result);
      // this.getCourses();
      this.router.navigate(['/courses']);
      }, (err) => {
      console.log(err);
      });
    }
  
  }
  



}