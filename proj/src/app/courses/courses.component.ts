import { Component, OnInit } from '@angular/core';
import { RestcourseService } from '../restcourse.service';
import { RestuserService } from '../restuser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:any[];
  courseForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,public restCourse:RestcourseService,public restUser:RestuserService, private route: ActivatedRoute, private router: Router)
  { }

  ngOnInit() {
    
    this.getCourses();
      this.courseForm = this.formBuilder.group({
          name: ['', Validators.required],
          link: ['', Validators.required],
          duration: ['', Validators.required],
          price: ['', Validators.required]
      });
      
  }
  get f() { return this.courseForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.courseForm.invalid) {
        return;
    }
    else {
      this.restCourse.addCourse(this.courseForm.value).subscribe((result) => { 
      console.log(result);
      this.getCourses();
      }, (err) => {
      console.log(err);
      });
    }
  }

  getCourses() {
    this.courses = [];
    this.restCourse.getCourses().subscribe(data => {
      // console.log(data);
      this.courses = data;
    });
  }

  delete(obj) {
    let name = obj.name;
    this.restCourse.deleteCourse(name)
      .subscribe(res => {
          this.getCourses();
        }, (err) => {
          console.log(err);
        }
      );
  }
 

}
