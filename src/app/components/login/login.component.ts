import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form={
    uemail:'',
    password:'',
  };
  constructor(private obj:RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.obj.loginUser(this.form).subscribe(
      response=>{
        console.log(response);
        alert("Login succesfull");
        
      },
      error=>{
        console.log(error);
        alert("Something went wrong");
        
      }
    )
  }

  // onReset(form:NgForm):void{
  //   form.reset();
  // }
}
