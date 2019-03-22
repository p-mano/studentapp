import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students=[{rollNo:'499',birthDate:'12-4-2006',firstName:'Manoj',lastName:'kumar',parentName:'meena',parentPhone:'8008898310',address:'abcd colony'},
  {rollNo:'450',birthDate:'12-4-2010',firstName:'Manoj',lastName:'kumar',parentName:'meena',parentPhone:'8008898310',address:'abcd colony'},
  {rollNo:'451',birthDate:'12-5-2009',firstName:'Mano',lastName:'kumar',parentName:'meenakshi',parentPhone:'8008898311',address:'abcde colony'},
  {rollNo:'452',birthDate:'12-6-2005',firstName:'Manu',lastName:'kumar',parentName:'meenakshi',parentPhone:'8008898312',address:'abcdf colony'},
  {rollNo:'453',birthDate:'12-2-2008',firstName:'Manas',lastName:'kumar',parentName:'meenakshi',parentPhone:'8008898313',address:'abcdg colony'},
  {rollNo:'454',birthDate:'12-9-2007',firstName:'Manoo',lastName:'kumar',parentName:'meenakshi',parentPhone:'8008898314',address:'abcdh colony'},
  {rollNo:'455',birthDate:'12-6-2004',firstName:'Manou',lastName:'kumar',parentName:'meenakshi',parentPhone:'8008898315',address:'abcdy colony'}
];

  constructor() { }

  getStudents(){
     if(localStorage.getItem('students') != null){
      this.students=JSON.parse(localStorage.getItem('students'));
    }
    return this.students;
  }

  deleteStudent(student){
    for(var i=0; i<this.students.length;i++){
      if(this.students[i].rollNo == student.rollNo){
           this.students.splice(i,1)
      }
    }
    localStorage.setItem('students',JSON.stringify(this.students))
  }

  addStudent(student){
   this.students.push(student);
   localStorage.setItem('students',JSON.stringify(this.students));
    }

    updateStudent(student){
      for (var i=0; i<this.students.length;i++){
                 if(this.students[i].rollNo  == student.rollNo){
                   this.students[i]=student;
       localStorage.setItem('students',JSON.stringify(this.students));
                 }
      }
    }
    getStudentById(rollNo){
        for(var i=0; i<this.students.length;i++){
          if (this.students[i].rollNo == rollNo){
            return this.students[i];

          }

        }

    }
  }
