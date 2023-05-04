"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappDAO_1 = __importDefault(require("../dao/WhatsappDAO"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const SampleModel_1 = __importDefault(require("../shared/SampleModel"));
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
function GetTextUser(messages) {
    var text = "";
    var typeMessage = messages["type"];
    if (typeMessage == "text") {
        text = messages["text"]["body"];
    }
    else if (typeMessage == "interactive") {
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        if (typeInteractive == "button_reply") {
            text = interactiveObject["button_reply"]["title"];
        }
        else if (typeInteractive == "list_reply") {
            text = interactiveObject["list_reply"]["title"];
        }
        else {
            console.log("Sin mensaje");
        }
    }
    else {
        console.log("Sin mensaje");
    }
    return text;
}
class WhatsappController extends WhatsappDAO_1.default {
    constructor() {
        super(...arguments);
        this.getVerifyToken = (req, res) => {
            try {
                var accessToken = "RYTAFAADHJJADADH25634232GGSDSA12345";
                var token = req.query["hub.verify_token"];
                var challenge = req.query["hub.challenge"];
                if (challenge != null && token != null && token == accessToken) {
                    res.send(challenge);
                }
                else {
                    res.status(400).send();
                }
            }
            catch (e) {
                res.status(400).send();
            }
        };
        this.getReceiveToken = (req, res) => {
            try {
                var entry = req.body["entry"][0];
                var changes = entry["changes"][0];
                var value = changes["value"];
                var messageObject = value["messages"];
                if (typeof messageObject != "undefined") {
                    var messages = messageObject[0];
                    var number = messages["from"];
                    var text = GetTextUser(messages);
                    myConsole.log(text);
                    console.log(text);
                    console.log(number);
                    if (text == "text") {
                        var data = SampleModel_1.default.SampleText("Hola inge", number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "image") {
                        var data = SampleModel_1.default.SampleImage(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "video") {
                        var data = SampleModel_1.default.SampleVideo(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "audio") {
                        var data = SampleModel_1.default.SampleAudio(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "document") {
                        var data = SampleModel_1.default.SampleDocument(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "button") {
                        var data = SampleModel_1.default.SampleButtons(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "list") {
                        var data = SampleModel_1.default.SampleList(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else if (text == "location") {
                        var data = SampleModel_1.default.SampleLocation(number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                    else {
                        var data = SampleModel_1.default.SampleText("Escriba bien mula", number);
                        WhatsappService_1.default.SendMessageWhatsApp(data);
                    }
                }
                res.send("EVENT_RECEIVED");
            }
            catch (e) {
                myConsole.log(e);
                res.send("EVENT_RECEIVED");
            }
        };
    }
}
const whatsappController = new WhatsappController();
exports.default = whatsappController;
