import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor(public authservice:AuthService,public router:Router) { 
    // const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear - 20, 0, 1);
    // this.maxDate = new Date(currentYear + 1, 11, 31);


  }

  ngOnInit(): void {





  }
  telInputObject(obj) {
    console.log(obj);
    obj.setCountry('in');
  }
  onLogin(form: NgForm){
    debugger;
    if(form.invalid)
    {
      return
    }

    this.authservice.createUser(form.value.firstname,form.value.lastname,form.value.phoneNumber,form.value.email,form.value.passid);
    this.router.navigate(['login']);
  }
}
