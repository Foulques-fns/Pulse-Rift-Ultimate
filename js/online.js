// Client adapter for the optional real-time server.
// Set window.PULSE_RIFT_SERVER to your deployed WebSocket URL.
window.PULSE_RIFT_SERVER=window.PULSE_RIFT_SERVER||"";
window.PulseRiftOnline={socket:null,connect(token,onMessage){if(!window.PULSE_RIFT_SERVER)return false;this.socket=new WebSocket(window.PULSE_RIFT_SERVER);this.socket.onopen=()=>this.socket.send(JSON.stringify({type:"auth",token}));this.socket.onmessage=e=>onMessage?.(JSON.parse(e.data));return true},queue(){this.socket?.send(JSON.stringify({type:"queue"}))},progress(pct){this.socket?.send(JSON.stringify({type:"progress",pct}))},finish(time){this.socket?.send(JSON.stringify({type:"finish",time}))}};
