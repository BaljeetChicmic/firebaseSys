import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

  constructor(private toastr:ToastrService) { }

  successMsg(message:any){
    this.toastr.success(message);
  }

  errorMsg(message:any){
    this.toastr.error(message);
  }
  
  
}
