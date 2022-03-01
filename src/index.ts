import { io, Socket } from 'socket.io-client';
import { initSocketEvents } from './socketEvents';
import './assets/styles/index.less';

window.onload = function () {
    const startBtn: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById('start-btn')
    );
    const usernameInput: HTMLInputElement = <HTMLInputElement>(
        document.getElementById('username')
    );
    const domain: string =
        window.location.protocol + '//' + window.location.hostname;
    const socket: Socket = io(domain);

    initSocketEvents(socket);

    startBtn.onclick = function (): void {
        if (usernameInput.value) {
            socket.emit('startGame', usernameInput.value);
        }
    };
};
