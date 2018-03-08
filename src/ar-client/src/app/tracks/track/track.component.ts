import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Track } from '../../models/track.model';

@Component({
    selector: 'ar-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
    @Input('track') track: Track;

    public leftPx: number;
    public topPx: number;

    ngOnInit() {
        this.leftPx = this.track.x * 100;
        this.topPx = this.track.y * 100;
    }
}