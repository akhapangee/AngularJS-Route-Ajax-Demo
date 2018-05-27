import { Component, OnInit } from "@angular/core";
import { Student } from "../../models/Student";
import { IStudentService, StudentService } from "../../services/StudentService";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'student',
    templateUrl: 'student.component.html',
    providers:[StudentService]
})
export class StudentComponent implements OnInit {
    students;
    studentService: StudentService;

    public constructor(studentService:StudentService,private http:HttpClient){
        this.studentService = studentService;
    }
    ngOnInit(): void {
       this.http.get('/data/students.json').subscribe(data=>{
           this.students = data;
       });
    }
}