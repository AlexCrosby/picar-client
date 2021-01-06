import {useState} from 'react';


function KeyHandler(setKey, socket) {


    function onKeyUp(e) {
        let k = e.key.toUpperCase()
        if (['W', 'A', 'S', 'D'].includes(k)) {
            var message = {['Key' + k]: 0}
            socket.emit('command', message)

            setKey(k);
        }
    }

    function onKeyDown(e) {
        let k = e.key.toUpperCase()
        if (e.repeat) return;
        if (['W', 'A', 'S', 'D'].includes(k)) {
            var message = {['Key' + k]: 1}
            socket.emit('command', message)

            setKey(k);

        }

    }

    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('keydown', onKeyDown);
    return () => {
        window.removeEventListener('keyup', onKeyUp);
        window.removeEventListener('keydown', onKeyDown);
    }
}

export default KeyHandler;