import { Injectable, EventEmitter } from '@angular/core';
import { ConnectionStatus } from '../../models/connection-status.model';
import { Track } from '../../models/track.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class ArService {
    
    public connection: WebSocket;
    public socketConnectionStatus = ConnectionStatus.None;

    public connectionStatus = new EventEmitter<ConnectionStatus>();

    public track = new EventEmitter<Track>();
    
    public open = new EventEmitter<any>();
    public close = new EventEmitter<any>();

    private url:string = 'ws://localhost:40511';

    subscriptions: Subscription[] = [];

    constructor() {
        this.wsConnect();
    }

    setWsConnectionStatus(status: ConnectionStatus) {
        this.connectionStatus.emit(status);
    }

    wsConnect(){
        
        const $this = this;

        this.connection = new WebSocket(this.url);
        
        this.connection.onmessage = function (track:Track) {
            console.log("Track received", track);
            $this.track.emit(track);
        }

        this.connection.onerror = (arg) => {
            console.error('WebSocket onError', JSON.stringify(arg));
        };

        this.connection.onopen = (arg) => {
            console.log("WebSocket Connected", JSON.stringify(arg));

            this.setWsConnectionStatus(ConnectionStatus.Connected);

            this.open.emit(arg);
        };

        this.connection.onclose = (arg) => {
            console.log("WebSocket onClose", JSON.stringify(arg));
            this.setWsConnectionStatus(ConnectionStatus.Disconnected);
            this.close.emit(arg);
        };

    }

    setConnectionStatus(status: ConnectionStatus) {
        this.connectionStatus.emit(status);
    }

    dispose(){
        this.subscriptions.forEach(subs => subs.unsubscribe());
    }
    
}