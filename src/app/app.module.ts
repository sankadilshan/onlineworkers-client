import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
//import {SlideshowModule} from 'ng-slideshow';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule, MatBadgeModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatStepperModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatSelectModule, MatExpansionModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatVideoModule} from 'mat-video';
import { PageLoginMiddleComponent } from './components/page-login-middle/page-login-middle.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CounterPipe } from './custom-pipe/counter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ScrollToModule} from 'ng2-scroll-to-el';
import {NotifierModule,NotifierOptions} from 'angular-notifier';
import { SocialService } from './service/social.service';
import { CommentsComponent } from './components/comments/comments.component';
import { UserinfoService } from './service/userinfo.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AnimationComponent } from './components/animation/animation.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { SafeHtml } from './custom-pipe/sanitize.pipe';
import { HttpErrorInterceptor } from './ex-handle/http-error.interceptor';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';



const customNotification:NotifierOptions={
  
  position: {
    horizontal: {
        position: "right",
        distance: 12
    },
    vertical: {
        position: "top",
        distance: 70,
        gap: 5
    }
},
theme: "material",
behaviour: {
    autoHide:3000,
    onClick: false,
    onMouseover: "pauseAutoHide",
    showDismissButton: true,
    stacking: 9,
  
},
animations: {
    enabled: true,
    show: {
        preset: "slide",
        speed: 300,
        easing: "ease-in"
    },
    hide: {
        preset: "slide",
        speed: 300,
        easing: "ease-in",
        offset: 50
    },
    shift: {
        speed: 300,
        easing: "ease-in"
    },
    overlap: 150
}
};
@NgModule({
  declarations: [
    AppComponent,
    PageRegistrationComponent,
    PageLoginComponent,
    NotfoundcomponentComponent,
    DashboardComponent,
    PageLoginMiddleComponent,
    PageHomeComponent,
    NavbarComponent,

    CounterPipe,
    SafeHtml,

    FooterComponent,
    CommentsComponent,
    UserProfileComponent,
    SidenavComponent,
    SearchbarComponent,
    AnimationComponent,
    PostShowComponent,
    AdditionalInfoComponent

  ],
  entryComponents:[CommentsComponent,PageRegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatVideoModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    HttpClientModule,
    NgxPaginationModule,
    ScrollToModule.forRoot(),
    MatTooltipModule,
    MatSnackBarModule,
    NotifierModule.withConfig(customNotification),
    MatDialogModule,
    ScrollingModule,
    MatStepperModule,
    MatFileUploadModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatSelectModule,
    MatExpansionModule
   // SlideshowModule
  ],
  providers: [SocialService,UserinfoService,{provide:HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
