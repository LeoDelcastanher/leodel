import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BoxSizingComponent } from './components/box-sizing/box-sizing.component';
import {FormsModule} from "@angular/forms";
import { TopPartComponent } from './components/top-part/top-part.component';
import { HeaderComponent } from './components/header/header.component';
import { MyBtnComponent } from './elements/my-btn/my-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BoxSizingComponent,
    TopPartComponent,
    HeaderComponent,
    MyBtnComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
