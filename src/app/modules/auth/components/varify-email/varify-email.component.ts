import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PARENT_PATH, PATH } from 'src/app/common/constant';
import { FirebaseServiceService } from 'src/app/core/service/firebase-service.service';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.scss']
})
export class VarifyEmailComponent implements OnInit {

  constructor(
    private fservice:FirebaseServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  sendVarification()
  {
   this.router.navigateByUrl(`${PARENT_PATH.AUTH}/${PATH.AUTH.SIGNIN}`);
  }
}
