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
    public s: string;
    public risk: string;

    ngOnInit() {
        this.leftPx = this.track.x * 400


        this.topPx = this.track.y * 225;
        this.s = this.track.s * 10 + 'px';

        switch (this.track.r) {
            case 1:
                this.risk = 'white';
                break;
            case 2:
                this.risk = 'green';
                break;
            case 3:
                this.risk = 'yellow';
                break;
            case 4:
                this.risk = 'orange';
                break;
            case 5:
                this.risk = 'red';
                break;
            default:
                this.risk = 'purple';
                break;

        }
    }
}