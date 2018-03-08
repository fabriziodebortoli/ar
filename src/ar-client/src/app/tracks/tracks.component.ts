import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Track } from '../models/track.model';
import { TracksService } from '../core/services/tracks.service';

@Component({
    selector: 'ar-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

    @ViewChild('tc') tc: ElementRef;

    constructor(private tracksService: TracksService) {

    }

    ngOnInit() {
        this.tracksService.getTracks().subscribe((tracks: Track[]) => {
            this.drawTracks(tracks);
        });
    }

    drawTracks(tracks: Track[]) {
        tracks.forEach(t => this.drawTrack(t))
    }

    drawTrack(track: Track) {
        console.log("Drawing track", track);
    }
}
