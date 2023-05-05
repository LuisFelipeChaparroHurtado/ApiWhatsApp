"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsAppModels_1 = __importDefault(require("./WhatsAppModels"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const ChatGPTService_1 = __importDefault(require("../services/ChatGPTService"));
class ProcessMessage {
    Process(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            /*if (textUser.includes("hola")) {
                    //Saludo
                    var model = whatsappModels.MessageText("Hola, un gusto saludarte", number);
                    models.push(model);
                    var modelList = whatsappModels.MessageList(number);
                    models.push(modelList);
                }
                else if(textUser.includes("gracias")){
                    //Agradecimiento
                    var model = whatsappModels.MessageText("Gracias a ti por escribirme", number);
                    models.push(model);
                    
                }
                else if(textUser.includes("adios") || textUser.includes("bye") || textUser.includes("me voy") || textUser.includes("adiós")){
                    //Despedida
                    var model = whatsappModels.MessageText("Cuidate", number);
                    models.push(model);
                }else if(textUser.includes("comprar")){
                    //Comprar
                    var model = whatsappModels.MessageButtons(number);
                    models.push(model);
                    
                }else if(textUser.includes("vender")){
                    //Vender
                    var model = whatsappModels.MessageText("Registrate en el siguiente formato: https://guiaelectoraldecolombia.com ", number);
                    models.push(model);
                    
                }
                else if(textUser.includes("agencia")){
                    //Agencia
                    var model = whatsappModels.MessageLocation(number);
                    models.push(model);
                    
                }
                else if(textUser.includes("contacto")){
                    //Agencia
                    var model = whatsappModels.MessageText("*Centro de contacto:*\n3143385561",number);
                    models.push(model);
                    
                }
                else {
                    var model = whatsappModels.MessageText("No entiendo", number);
                    models.push(model);
                }
                */
            const resultChatGPT = yield ChatGPTService_1.default.GetMessageChaGPT(textUser);
            if (resultChatGPT != null) {
                var model = WhatsAppModels_1.default.MessageText(resultChatGPT, number);
                models.push(model);
            }
            else {
                var model = WhatsAppModels_1.default.MessageText("Lo siento algo salió mal, inténtalo más tarde.", number);
                models.push(model);
            }
            models.forEach((model) => {
                WhatsappService_1.default.SendMessageWhatsApp(model);
            });
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
