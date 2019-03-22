import { Component, OnInit } from '@angular/core';
import StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
student:any={};
  constructor(private router:Router,private studentService:StudentService ) { }

  ngOnInit() {
  }
  addStudent(student){
    this.studentService.addStudent(student);
    this.router.navigate(['/liststudent']);
  }
}
