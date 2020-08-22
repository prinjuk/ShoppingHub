import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public form:FormBuilder,public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    // this.buildForm();
  }
  // buildForm()
  // {
  //   this.loginForm=this.form.group({
  //       emailid:['',Validators.required],
  //       passid:['',Validators.required]
  //   });
  // }
  onLogin(form: NgForm){
  if(form.invalid)
  {
    return 
  }
 
  this.auth.login(form.value.email,form.value.password)

  }
}
