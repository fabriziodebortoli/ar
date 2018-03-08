import { EventEmitter, Injectable } from '@angular/core';

import { ConnectionStatus } from '../../models/connection-status.model';

@Injectable()
export class WebSocketService  {
    public connection: WebSocket;
    public socketConnectionStatus = ConnectionStatus.None;

    public connectionStatus = new EventEmitter<ConnectionStatus>();

    public track = new EventEmitter<any>();
    public open = new EventEmitter<any>();
    public close = new EventEmitter<any>();

    private url:string = 'ws://localhost:40510';

    constructor() {
        
    }

    setWsConnectionStatus(status: ConnectionStatus) {
        this.connectionStatus.emit(status);
    }

    wsConnect(){
        
        this.connection = new WebSocket(this.url);
        
        this.connection.onmessage = function (msg) {
            console.log("message", msg);
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


}