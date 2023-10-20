"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const SampleModel_1 = __importDefault(require("./SampleModel"));
class ProcessMessage {
    Process(textUser, number) {
        textUser = textUser.toLowerCase();
        var models = [];
        //hola que tal
        if (textUser.includes("hola") ||
            textUser.includes("buenos") ||
            textUser.includes("buenas")) {
            //SALUDAR
            var model = SampleModel_1.default.SampleText("Hola, un gusto saludarte", number);
            models.push(model);
            var modelList = SampleModel_1.default.SampleList(number);
            models.push(modelList);
        }
        else if (textUser.includes("gracias")) {
            //AGRADECIMIENTO
            var model = SampleModel_1.default.SampleText("Con gusto, gracias por comunicarte con nosotros", number);
            models.push(model);
        }
        else if (textUser.includes("adios") ||
            textUser.includes("adiós") ||
            textUser.includes("bye") ||
            textUser.includes("chao")) {
            //DESPEDIDA
            var model = SampleModel_1.default.SampleText("Ve con DIOS", number);
            models.push(model);
        }
        else if (textUser.includes("comprar")) {
            //COMPRAR
            var modelButton = SampleModel_1.default.SampleButtons(number);
            models.push(modelButton);
        }
        else if (textUser.includes("vender")) {
            //VENDER
            var model = SampleModel_1.default.SampleText("Seguir la siguiente cuenta: linkedin.com/in/juan-pablo-robles-arias-00316626b", number);
            models.push(model);
        }
        else if (textUser.includes("agendar")) {
            //AGENCIA
            var model = SampleModel_1.default.SampleText("Registatre en el siguiente formulario para poder agendarte 💪: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
            models.push(model);
        }
        else if (textUser.includes("centro de contacto")) {
            //CENTRO DE CONTACTO
            var model = SampleModel_1.default.SampleLocation(number);
            models.push(model);
        }
        else if (textUser.includes("chat")) {
            //CHAT GPT
            var model = SampleModel_1.default.SampleLocation(number);
            models.push(model);
        }
        else if (textUser.includes("contact")) {
            //CHAT GPT
            var model = SampleModel_1.default.SampleLocation(number);
            models.push(model);
        }
        else {
            //NO TE ENTIENDO
            var model = SampleModel_1.default.SampleText("No entiendo lo que dices...", number);
            models.push(model);
        }
        models.forEach((data) => {
            WhatsappService_1.default.SendMessageWhatsApp(data);
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
