import { Component, OnInit } from "@angular/core";
import { Student } from "../../models/Student";
import { IStudentService, StudentService } from "../../services/StudentService";

@Component({
    selector: 'student',
    templateUrl: 'student.component.html',
    providers:[StudentService]
})
export class StudentComponent implements OnInit {
    students: Array<Student> = null;
    studentService: StudentService;

    public constructor(studentService:StudentService){
        this.studentService = studentService;
    }
    ngOnInit(): void {
        var student: Student = new Student();

        student.setId(1);
        student.setName("Gita");
        student.setStatus(true);
        this.studentService.insert(student);

        var student: Student = new Student();
        student.setId(2);
        student.setName("Ramesh");
        student.setStatus(true);
        this.studentService.insert(student);

        var student: Student = new Student();
        student.setId(3);
        student.setName("Hari");
        student.setStatus(false);
        this.studentService.insert(student);

        this.students = this.studentService.getAll();
    }
}