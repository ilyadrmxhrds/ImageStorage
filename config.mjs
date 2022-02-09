/**
 * Custom Amino WebSocket listening.
 * Note: if you don't want to bother with this config and
 * just want to listen messages, you need to
 * change ``webSocket.on("message", {  })`` block.
 * @param {Client} client Amino Client
 * @param {SubClient} subClient Amino SubClient
 * @author IlyaDreamix
 */
export function customSocketListening(client, subClient) {
    client.startListeningMessages();
    client.ws.then((webSocket) => {
        /**
         * It's when everyting works
         */
         webSocket.on(
            "open", () => {
                if (client.debug) {
                    console.log(`Amino WS connected: ${Date.now()}`);
                }
            }
        );

        /**
         * It's when client got Amino message
         */
        webSocket.on(
            "message", (message) => {
                // Your code
            }
        );

        /**
         * It's when something does not work and it needs to restart
         */
        webSocket.on(
            "close", () => {
                if (client.debug) {
                    console.log(`Amino WS closed: ${Date.now()}`);
                }
                customSocketListening(client, subClient);
            }
        );
    });
}

module.exports = {
    customSocketListening
}
