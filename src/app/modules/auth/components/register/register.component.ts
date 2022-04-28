import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PARENT_PATH, PATH, REGEX } from 'src/app/common/constant';
import { FirebaseServiceService } from 'src/app/core/service/firebase-service.service';
import { ToastrServiceService } from 'src/app/core/service/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any;
  submitted:boolean=false;
  constructor(
    private form:FormBuilder,
    private fservice:FirebaseServiceService,
    private toastr:ToastrServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }
 
  initRegisterForm(){
    this.registerForm=this.form.group({
       email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]]
    });
  }
  get controls()
  {
    return this.registerForm.controls;
  }

  submitData()
  {
    this.submitted=true;
    if(this.registerForm.valid){
      this.fservice.signUp(this.registerForm.value).then((result)=>{

        //varified email
        this.fservice.sendVarificationMail().then(()=>
        this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.VARIFYEMAIL}`));
        
        this.toastr.successMsg("sucessfully registered");
        this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNIN}`);

      }).catch(err=>{
        if(err){
          this.toastr.errorMsg(err.code)
        }
      });
    }
    else{
      this.toastr.errorMsg("Please check your details");
    }
    
    console.log(this.registerForm.value);

  }
}
