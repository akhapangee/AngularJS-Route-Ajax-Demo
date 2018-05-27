import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username: string;
  @Input()
  password: string;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  login() {
    console.log(this.username);
    if (this.username == 'admin' && this.password == 'admin') {
      alert("success");
      this.router.navigateByUrl("/student");
    } else {
      alert("invalid");
    }
  }

}
