import { Socket } from 'socket.io-client';

export function canUseUsername(socket: Socket) {
    socket.on('canUseUsername', () => {
        const modelWrap: HTMLDivElement = <HTMLDivElement>(
            document.getElementById('modal-wrap')
        );

        modelWrap.style.display = 'none';
    });
}
