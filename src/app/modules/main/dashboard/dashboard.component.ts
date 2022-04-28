import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PARENT_PATH, PATH } from 'src/app/common/constant';
import { FirebaseServiceService } from 'src/app/core/service/firebase-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private fservice:FirebaseServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  clickOn()
  {
    this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNIN}`);
  }

  logOut()
  {
    Swal.fire({
      icon:'question',
      text:'Are you sure! you wanna logout',
      showCancelButton:true,
      cancelButtonText:'Cancel',
      showConfirmButton:true,
      confirmButtonText:'logout'
      
    }).then((result)=>
    {
      if(result.isConfirmed)
      {
        this.fservice.signOut().then(()=>{
          localStorage.clear();
          this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNIN}`);
        })
      }
    })
    
  }
}
