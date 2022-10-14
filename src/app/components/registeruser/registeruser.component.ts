import { Component, OnInit } from '@angular/core';
//import { Registration } from 'src/app/models/registration.model';
import { RegistrationService } from 'src/app/services/registration.service';
import { NgForm} from '@angular/forms';



@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

    // registration:Registration={
    //   uname:'',
    //   uemail:'',
    //   password:''
    // };
    // submitted=false;

    form={

      uname:'',
      uemail:'',
      password:'',
      // confirmPassword:'',
    };
    

  constructor(private obj:RegistrationService) { }
  ngOnInit(): void {
    
    
  }

  onSubmit():void{
    this.obj.saveUser(this.form).subscribe(
      response=>{
        console.log(response);
        alert("Registeration succesfull")
        
      },
      error=>{
        console.log(error);
        alert("Something went wrong");
        
      }
    )
  }

  onReset(form:NgForm):void{
    form.reset();
  }
  

  //  save():void{

  //   const data={
  //     uname:this.registration.uname,
  //     uemail:this.registration.uemail,
  //     password:this.registration.password
  //   };

  //   this.obj.saveUser(data).subscribe(
  //     response=>{
  //       console.log(response);
  //       this.submitted=true;
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   );
  //  }

  //  newUser():void{
  //   this.submitted=false;
  //   this.registration={
  //     uname:'',
  //     uemail:'',
  //     password:'',
  //   };
  //  }

  // get f():{[key:string]:AbstractControl}
  // {
  //   return this.form.controls;
  // }

  

}
