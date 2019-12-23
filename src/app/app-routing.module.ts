import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainApplicationComponent } from './components/main-application/main-application.component';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageLoginComponent } from './components/page-login/page-login.component';


const routes: Routes = [
   {path:'', component:DashboardComponent, pathMatch:'full'},
   {path: 'main', component: MainApplicationComponent},
   {path: 'register',component: PageRegistrationComponent},
   {path: 'login', component:PageLoginComponent},
   {path: '**', component: NotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
