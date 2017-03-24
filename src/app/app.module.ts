import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { TrackScrollDirective } from './track-scroll.directive';

@NgModule({
  imports:      [ 
  	BrowserModule
  	, MaterialModule 
  ],
  declarations: [ 
  	AppComponent
  	, TrackScrollDirective 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
