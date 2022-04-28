import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PARENT_PATH, PATH } from 'src/app/common/constant';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private fservice:FirebaseServiceService,
    private router:Router
  ){}
  canActivate(): boolean {
    console.log("token-->",this.fservice.isLoggedIn);
    if(this.fservice.isLoggedIn){
      return true;
    }
    this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNIN}`);
    return false;
  }  
}

@Injectable()
export class AuthLoginGuard implements CanActivate{
  constructor(
    private fservice:FirebaseServiceService,
    private router:Router
  ){}
  canActivate(): boolean {
    if(this.fservice.isLoggedIn){
      this.router.navigateByUrl(`${PARENT_PATH.MAIN}/${PATH.MAIN.DASHBOARD}`);
      return false;
    }
    return true;
  }
  
}