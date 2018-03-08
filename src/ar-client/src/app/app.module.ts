import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArCoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackComponent } from './tracks/track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TracksComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    ArCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TrackComponent]
})
export class AppModule { }
