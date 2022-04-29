import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem("accessToken");
    const API_KEY="test";
    console.log("token-->",token);
    if(token){
      request = request.clone({
        headers: request.headers.set('authorization', token).set('API-KEY',API_KEY)
        
      });
      console.log("if condition");
    }
    else{
      request=request.clone({
        headers:request.headers.set('API_KEY',API_KEY)
      })
      console.log("else part");
    }
    return next.handle(request).pipe(map((event:HttpEvent<any>)=>{
      if(event instanceof HttpResponse){
        console.log(event);
      }
      return event;
    }))
  }
}
