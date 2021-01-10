import './App.css';
import React, {useState, useEffect} from "react";
import ConnectToCar from "./components/socket";
import KeyHandler from "./components/controls";
import Gpad from  "./components/gamepad";

function App() {
    // window.addEventListener('keydown', (event) => {
    //     console.log("THIS LISTENER WORKS")
    // });


    const [state, setState] = useState("Init");
    const [key, setKey] = useState("None")

    useEffect(() => {

        const socket = ConnectToCar(setState);
        // eslint-disable-next-line no-unused-vars
        const keys = KeyHandler(setKey, socket)
    }, []);

    return (
        <div>
            <h1>Car Stream</h1>
            <>Status: {state}</><br/>
            <>Last key pressed: {key}</>
            <div>
                <img src="http://192.168.1.94:5000/video_feed" alt={''}/>
            </div>
            here
            <Gpad/>
        </div>
    );
}

export default App;