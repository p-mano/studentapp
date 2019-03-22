import { Component, OnInit } from '@angular/core';
import StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  constructor(private router:Router,private studentService:StudentService  ) {}
  

  ngOnInit() {
   
  }
  list=this.studentService.getStudents();
  deleteStudent(student){
    this.studentService.deleteStudent(student);
  }
  update(student){
    this.router.navigate(['/updatestudent/'+student.rollNo]);
  }
}
