import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { DataService } from './services/data-service';
import { SampleList } from './components/sample-list/sample-list.component';
import { AListComponent } from './components/a-list/a-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SampleList,
    AListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
