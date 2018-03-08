import { Component, ElementRef, ViewChild, Input, OnInit, ViewContainerRef, ComponentRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { Track } from '../models/track.model';
import { TracksService } from '../core/services/tracks.service';
import { TrackComponent } from './track/track.component';

@Component({
    selector: 'ar-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements AfterContentInit {

    tracks: Track[];

    constructor(
        private tracksService: TracksService,
        private componentResolver: ComponentFactoryResolver
    ) { }

    ngAfterContentInit() {
        this.tracksService.getTracks().subscribe((tracks: Track[]) => this.tracks = tracks);
    }
}
