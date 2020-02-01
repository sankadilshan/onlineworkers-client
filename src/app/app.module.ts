import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {SlideshowModule} from 'ng-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule, MatBadgeModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatVideoModule} from 'mat-video';
import { PageFootComponent } from './components/page-foot/page-foot.component';
import { PageLoginMiddleComponent } from './components/page-login-middle/page-login-middle.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CounterPipe } from './custom-pipe/counter.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRegistrationComponent,
    PageLoginComponent,
    NotfoundcomponentComponent,
    DashboardComponent,
    PageFootComponent,
    PageLoginMiddleComponent,
    PageHomeComponent,
    NavbarComponent,
    CounterPipe,
    FooterComponent

  ],
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
    MatBadgeModule
   // SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
