import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
   {path:'', component:DashboardComponent, pathMatch:'full'},
   {path:'home', component: PageHomeComponent},
   {path: 'register',component: PageRegistrationComponent},
   {path: 'login', component:PageLoginComponent},
   {path:'nav', component: NavbarComponent},
   {path: '**', component: NotfoundcomponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
