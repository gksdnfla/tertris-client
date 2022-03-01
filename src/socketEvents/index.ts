import { Socket } from 'socket.io-client';
import { nameIsDuplicate } from './nameIsDuplicate';

const arr = [nameIsDuplicate];

export function initSocketEvents(socket: Socket) {
    arr.forEach((fn: (socket: Socket) => void) => fn(socket));
}
