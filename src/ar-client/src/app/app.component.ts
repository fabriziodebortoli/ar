import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArService } from './core/services/ar.service';
import { Subscription } from 'rxjs/Subscription';
import { Track } from './models/track.model';
import { TracksService } from './core/services/tracks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  subscriptions: Subscription[] = [];

  constructor(private arService: ArService, private tracksService: TracksService) { }

  ngOnInit() {
    this.subscriptions.push(this.arService.track.subscribe((track) => {
      this.tracksService.pushTrack(track);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
    this.arService.dispose();
  }
}
