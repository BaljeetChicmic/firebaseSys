import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATH, PATH } from './common/constant';
import { AuthGuard, AuthLoginGuard } from './core/guards/auth.guard';
import { WildcardComponent } from './wildcard/wildcard.component';


const routes: Routes = [
  {
    path:'', redirectTo:PARENT_PATH.AUTH, pathMatch:'full'
  },
  {
    path:PARENT_PATH.AUTH, loadChildren: () => import('./modules/auth/auth-module.module').then(m => m.AuthModuleModule)//,canActivate:[AuthLoginGuard]
  },
  {
    path:PARENT_PATH.MAIN, loadChildren: () => import('./modules/main/main-module.module').then(m => m.MainModuleModule)//,canActivate:[AuthGuard],
  },
  {
    path:PARENT_PATH.WILDCARD, component:WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
