import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { AboutMeComponent } from './modules/main/components/about-me/about-me.component';
import { ExperienceBoxComponent } from './modules/main/components/experience-box/experience-box.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitchComponent } from './shared/switch/switch.component';
import { MyNotificationComponent } from './shared/my-notification/my-notification.component';
import {
  ProjectBoxComponent
} from "./modules/main/components/experience-box/components/project-box/project-box.component";
import {StackBoxComponent} from "./shared/stack-box/stack-box.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    ExperienceBoxComponent,
    FooterComponent,
    SwitchComponent,
    MyNotificationComponent,
    ProjectBoxComponent,
    StackBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
