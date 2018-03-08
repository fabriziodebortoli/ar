import { Injectable, EventEmitter } from '@angular/core';
import { ConnectionStatus } from '../../models/connection-status.model';
import { Observable } from 'rxjs/Observable';
import { WebSocketService } from './web-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ArService {
    
    subscriptions: Subscription[] = [];
    public connectionStatus = new EventEmitter<ConnectionStatus>();

    constructor(
        public socket: WebSocketService
    ) {

        this.socket.wsConnect();

        this.subscriptions.push(this.socket.open.subscribe(() => {
            this.setConnectionStatus(ConnectionStatus.Connected);
            console.log("connected")
        }));

    }

    setConnectionStatus(status: ConnectionStatus) {
        this.connectionStatus.emit(status);
    }

    dispose(){
        this.subscriptions.forEach(subs => subs.unsubscribe());
    }
    
}