import { Socket } from 'socket.io-client';

export function nameIsDuplicate(socket: Socket) {
    socket.on('nameIsDuplicate', () => {
        var usernameDuplicateHint: HTMLParamElement = <HTMLParamElement>(
            document.getElementById('username-duplicate-hint')
        );

        usernameDuplicateHint.style.display = 'block';
    });
}
