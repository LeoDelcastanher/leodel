import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './main/Components/about-me/about-me.component';
import { ExperienceBoxComponent } from './main/Components/experience-box/experience-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    ExperienceBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
