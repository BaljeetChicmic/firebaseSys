import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
 userdata:any;
  constructor(private auth:AngularFireAuth) {
   
   }
//to store token
// this.auth.authState.subscribe((user)=>{
//   if(user){
//     this.userdata=user;
//     localStorage.setItem("user",JSON.stringify(this.userdata));
//   }
//   else{
//     localStorage.setItem("user","null");
//   }
// });

//to register new user
  signUp(data:any){
    return this.auth.createUserWithEmailAndPassword(data.email,data.password);
  }

  //to logged in user
  signIn(data:any){
    return this.auth.signInWithEmailAndPassword(data.email,data.password);
  }

  //send varification to varified user email.So, user can login for next time
  sendVarificationMail(){
    return this.auth.currentUser.then((user)=>
      user?.sendEmailVerification());
  }

  //to check whether user is logged in or not
  get isLoggedIn(){
    return !!localStorage.getItem("accessToken");
  }

  //logout
  signOut()
  {
    return this.auth.signOut();
  }
}
