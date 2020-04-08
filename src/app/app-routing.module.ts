import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AnimationComponent } from './components/animation/animation.component';
import { PageLoginMiddleComponent } from './components/page-login-middle/page-login-middle.component';


const routes: Routes = [
   {
     path:'',
     component:DashboardComponent, 
     pathMatch:'full'
   },
   {
     path:'home/:username', 
     component: PageHomeComponent
   },
   {
     path: 'register',
     component: PageRegistrationComponent
   },
   {
     path: 'login', 
     component:PageLoginComponent
   },
   {
     path:'nav', 
     component: NavbarComponent
   },
   {
     path:'footer', 
     component:FooterComponent
    },
   {
     path: 'profile/:username',
     component:UserProfileComponent
   },
   {
     path:'anim',
     component:AnimationComponent
   },
   {
    path:'m',
    component:PageLoginMiddleComponent
  },
   {
     path: '**', 
     component: NotfoundcomponentComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
    scrollPositionRestoration: 'top',
    // onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
