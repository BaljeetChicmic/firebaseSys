import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { WildcardComponent } from './wildcard/wildcard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptors } from './core/interceptor/http.interceptor';
import { AuthGuard, AuthLoginGuard } from './core/guards/auth.guard';
import { FirebaseServiceService } from './core/service/firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WildcardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    AuthGuard,AuthLoginGuard,FirebaseServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpInterceptors,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
