"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
function SendMessageWhatsApp(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `whatsapp:${number}`,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });
    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/110788808671059/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer RYTAFAADHJJADADH25634232GGSDSA12345"
        }
    };
    const req = https.request(options, (res) => {
        res.on("data", (d) => {
            process.stdout.write(d);
        });
    });
    req.on("error", (error) => {
        console.error(error);
    });
    req.write(data);
    req.end();
}
module.exports = {
    SendMessageWhatsApp
};
