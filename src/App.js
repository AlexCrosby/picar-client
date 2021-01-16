import './App.css';
import React, {useState, useEffect} from "react";
import ConnectToCar from "./components/socket";
import KeyHandler from "./components/controls";
import Gpad from  "./components/gamepad";
import Stream from "./components/stream";
function App() {
    // window.addEventListener('keydown', (event) => {
    //     console.log("THIS LISTENER WORKS")
    // });


    const [state, setState] = useState("Init");
    const [key, setKey] = useState("None")
    let socket = null


    useEffect(() => {
        socket = ConnectToCar(setState);
        KeyHandler(setKey, socket)
        }, []);

    return (
        <div>
            <h1>Car Stream</h1>
            <>Status: {state}</>
            <br/>
            <>Last key pressed: {key}</>
            <div>
                <Stream />
            </div>
            <Gpad deadZone={0.1}/>
        </div>
    );
}

export default App;
