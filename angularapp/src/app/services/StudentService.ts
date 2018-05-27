import { Student } from "../models/Student";
import { Injectable } from "@angular/core";


export interface IStudentService {
    getAll(): Array<Student>;
    insert(student: Student): void;
    getById(id: number): Student;
}

@Injectable()
export class StudentService implements IStudentService {
    private students: Array<Student> = new Array<Student>();

    getAll(): Student[] {
        return this.students;
    }

    insert(student: Student): void {
        this.students.push(student);
    }
    getById(id: number): Student {
        for (var i = 0; i < this.students.length; i++) {
            var student: Student = student[i];
            if (student.getId() == id) {
                return student;
            }
        }
        return null;
    }

}