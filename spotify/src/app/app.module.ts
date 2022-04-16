import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service/service.service';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { routing } from './approuting';
import { CustlayoutComponent } from './custlayout/custlayout.component';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InterceptService } from './progress/intercept.service';
import { LhomeComponent } from './lhome/lhome.component';
import { AboutComponent } from './about/about.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AudioPlayerComponent,
    CustlayoutComponent,
    CommonlayoutComponent,
    SearchResultComponent,
    LoginComponent,
    RegisterComponent,
    LhomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CarouselModule
  ],
  providers: [ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
