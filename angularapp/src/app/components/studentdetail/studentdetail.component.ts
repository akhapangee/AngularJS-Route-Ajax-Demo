import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  student: Student = new Student();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Student>("/data/student.detail.json").subscribe(data => {
      this.student = data;
    });
  }

}
