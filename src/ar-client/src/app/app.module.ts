import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ArCoreModule} from './core/core.module';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    ArCoreModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
