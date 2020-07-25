import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
  }
  onLogin(form: NgForm){
    debugger;
    if(form.invalid)
    {
      return
    }
    console.log(form.value.email,form.value.passid);
    this.authservice.createUser(form.value.email,form.value.passid);
      }
}
