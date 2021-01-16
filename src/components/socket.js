import socketIOClient from 'socket.io-client';

let socket = null
function ConnectToCar(setState) {

    socket = socketIOClient("http://picar1.duckdns.org:5000",{
        transports: ["websocket"]});
    socket.on("status", data => {
        //setResponse(data);
    });
    socket.on("connect", data => {
        setState("Connected")
        console.log("Connected to piCar.")

    });
    socket.on("disconnect", data => {
        setState("Disconnected")
        console.log("Disconnected to piCar.")

    });
    return socket
}

export default ConnectToCar;
export {socket}