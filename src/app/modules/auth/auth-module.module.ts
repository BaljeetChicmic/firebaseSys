import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from 'src/app/common/constant';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path:PATH.AUTH.SIGNIN, component:LoginComponent
  },
  {
    path:PATH.AUTH.SIGNUP, component:RegisterComponent
  },
  {
    path:PATH.AUTH.RESETPASSWORD, component:ResetPasswordComponent
  },
  {
    path:PATH.AUTH.VARIFYEMAIL,  component:VarifyEmailComponent
  },
  {
    path:'', redirectTo:PATH.AUTH.SIGNIN, pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    VarifyEmailComponent
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
  ],
})
export class AuthModuleModule { }
