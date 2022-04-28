import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from 'src/app/common/constant';

const routes:Routes=[
  {
    path:PATH.MAIN.DASHBOARD, component:DashboardComponent
  },
  {
    path:'', redirectTo:PATH.MAIN.DASHBOARD, pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModuleModule { }
