import signal from "./signalling";
import React from "react";

function Stream() {
    let signalObj = null;
    let isStreaming = false;

    let video = document.getElementById('v');

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    window.addEventListener('DOMContentLoaded', function () {
        video = document.getElementById('v');
        start = document.getElementById('start');
        stop = document.getElementById('stop');
    });





    let startStream = () => {

        var address = 'picar1.duckdns.org:8090/stream/webrtc'
        var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        var wsurl = protocol + '//' + address;

        if (!isStreaming) {
            console.log("create new signal")
            signalObj = new signal(wsurl,
                function (stream) {
                    console.log('got a stream!');

                    video.srcObject = stream;
                    video.play();
                },
                function (error) {
                    alert(error);
                },
                function () {
                    console.log('websocket closed. bye bye!');
                    video.srcObject = null;

                    isStreaming = false;
                },
                function (message) {
                    alert(message);
                }
            );
        }

    }


    let stopStream = ()=>{
        console.log("signalObj" + signalObj)
        if (signalObj) {
            console.log("STOP")
            signalObj.hangup();
            signalObj = null;
        }
    }


    return (
        <div>
            <div>
                <button id='start' onClick={()=>startStream()
                }
                        title="If you do not see any video stream, make sure your browser supports the codec used within this demo (see the source code for details, or try Firefox or Chrome)">
                    Start Streaming
                </button>
                <button id='stop'
                        onClick={()=>stopStream()}>Stop Streaming</button>
            </div>
            <video  id='v' controls width={640} height={480}/>
        </div>
    )
}

export default Stream