import { Socket } from 'socket.io-client';
import { nameIsDuplicate } from './nameIsDuplicate';
import { canUseUsername } from './canUseUsername';

const arr = [nameIsDuplicate, canUseUsername];

export function initSocketEvents(socket: Socket) {
    arr.forEach((fn: (socket: Socket) => void) => fn(socket));
}
