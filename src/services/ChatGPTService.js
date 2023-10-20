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
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
class ChatGPTService {
    GetMessageChaGPT(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const configuration = new openai_1.Configuration({ apiKey: String(process.env.PASS_OPENAPI) });
            const openai = new openai_1.OpenAIApi(configuration);
            console.log(openai);
            const response = yield openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                max_tokens: 100
            });
            console.log("3");
            if (response.status == 200 && response.data.choices.length > 0) {
                return response.data.choices[0].text;
                return null;
            }
        });
    }
}
const chatGPTService = new ChatGPTService();
exports.default = chatGPTService;
