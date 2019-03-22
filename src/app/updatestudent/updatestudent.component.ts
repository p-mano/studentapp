import { Component, OnInit } from '@angular/core';
import StudentService  from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
rollNo:any;
private sub:any;
  student:any;
  constructor(private router:Router,private route:ActivatedRoute,private studentService:StudentService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
            this.rollNo= +params['rollNo'];
         this.student=this.studentService.getStudentById(this.rollNo);
    })
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/liststudent']);
  }
}
