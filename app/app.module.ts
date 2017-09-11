import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { cityService } from './city.service';
import { AppComponent } from './app.component';
import {HttpModule,Http, Response} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [cityService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
