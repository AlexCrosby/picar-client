import socketIOClient from 'socket.io-client';


function ConnectToCar(setState) {
    //const [response, setResponse] = useState("");
    const socket = socketIOClient("http://192.168.1.94:5000",{
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