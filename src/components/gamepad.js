import Gamepad from 'react-gamepad'
import React from 'react';
import {socket} from "./socket";

class Gpad extends React.Component {
    connectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} connected !`)
    }

    disconnectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} disconnected !`)
    }

    buttonChangeHandler(buttonName, down) {
        if (buttonName in ['']) {
            console.log(buttonName, down)
        }
    }

    axisChangeHandler(axisName, value, previousValue) {
        if (['LeftStickX', 'LeftTrigger','RightTrigger'].includes(axisName)) {
            console.log(axisName, value)
            socket.emit('command', {[axisName]:value})
        }


    }

    buttonDownHandler(buttonName) {
        console.log(buttonName, 'down')
    }

    buttonUpHandler(buttonName) {
        console.log(buttonName, 'up')
    }

    render() {
        return (
            <div>
                <h2>Gamepad Stuff</h2>
                <Gamepad
                    onConnect={this.connectHandler}
                    onDisconnect={this.disconnectHandler}

                    onButtonChange={this.buttonChangeHandler}
                    onAxisChange={this.axisChangeHandler}
                >
                    <React.Fragment/>
                </Gamepad>
            </div>

        )
    }
}

export default Gpad