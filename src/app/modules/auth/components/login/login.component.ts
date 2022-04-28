import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PARENT_PATH, PATH, REGEX } from 'src/app/common/constant';
import { FirebaseServiceService } from 'src/app/core/service/firebase-service.service';
import { ToastrServiceService } from 'src/app/core/service/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  submitted:boolean=false;
  userData:any;
  constructor(
    private form:FormBuilder,
    private router:Router,
    private fservice:FirebaseServiceService,
    private toastr:ToastrServiceService,
    private auth:AngularFireAuth) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
 
  initLoginForm(){
    this.loginForm=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]]
    });
  }

  get controls(){
    return this.loginForm.controls;
  }

  submitData(){
      this.submitted=true;
      if(this.loginForm.valid){
        this.fservice.signIn(this.loginForm.value).then((result)=>{
          //store token in localstorage
          this.userData=result;
          console.log("userMail---->",this.userData.user._delegate.email);
          console.log(this.userData);
          localStorage.setItem("accessToken",this.userData.user._delegate.accessToken);
         // console.log(result);
            // this.auth.authState.subscribe((user)=>{
            //     this.userData=user;
            //     console.log(user);
            //     localStorage.setItem("Token",JSON.stringify(user));
                
            // });
          this.toastr.successMsg("Successfully logged In");
          this.router.navigateByUrl(`${PARENT_PATH.MAIN}/${PATH.MAIN.DASHBOARD}`);
        }).catch(err=>{
          if(err){
            this.toastr.errorMsg(err.code);
          }
        })
      }
      console.log(this.loginForm.value);
  }

  navigate(){
    this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNUP}`);
    //`${PARENT_PATHS.AUTH}/${PATHS.AUTH.FORGOT}`
  }
}
