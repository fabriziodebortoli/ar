import { Injectable, EventEmitter } from '@angular/core';

import { Track } from '../../models/track.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TracksService {

    private _HISTORY_LENGTH: number = 7;
    private tracks: Track[] = [];

    private subject = new Subject<Track[]>();

    pushTrack(track) {
        let t = track[Object.keys(track)[0]];
        //console.log("t", t);

        if (this.tracks.length == this._HISTORY_LENGTH)
            this.tracks.shift();

        this.tracks.push(t);

        this.subject.next(this.tracks);
    }

    getTracks(): Observable<Track[]> {
        return this.subject.asObservable();
    }

}