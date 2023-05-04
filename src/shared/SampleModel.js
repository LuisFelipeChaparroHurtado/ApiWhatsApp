"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleModel {
    SampleText(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            text: {
                body: textResponse,
            },
            type: "text",
        });
        return data;
    }
    SampleImage(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "image",
            image: {
                link: "https://i0.wp.com/criteriohidalgo.com/wp-content/uploads/2021/09/CR7.jpg?resize=780%2C470&ssl=1",
            },
        });
        return data;
    }
    SampleAudio(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "audio",
            audio: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3",
            },
        });
        return data;
    }
    SampleVideo(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "video",
            video: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
            },
        });
        return data;
    }
    SampleDocument(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "document",
            document: {
                link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            },
        });
        return data;
    }
    SampleButtons(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "button",
                body: {
                    text: "¿Confirmas tu registro?",
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Si",
                            },
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "No",
                            },
                        },
                    ],
                },
            },
        });
        return data;
    }
    SampleList(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "interactive",
            interactive: {
                type: "list",
                body: {
                    text: "Tengo estas opciones",
                },
                footer: {
                    text: "Selecciona una de las opciones para poder atenderte",
                },
                action: {
                    buttons: "Ver opciones",
                    sections: [
                        {
                            title: "Compra y vende productos",
                            rows: [
                                {
                                    id: "main-comprar",
                                    title: "Comprar",
                                    description: "Compra los mejores productos para tu hogar",
                                },
                                {
                                    id: "main-comprar",
                                    title: "Vender",
                                    description: "Vende tus productos",
                                },
                            ],
                        },
                        {
                            title: "Centro de atencion",
                            rows: [
                                {
                                    id: "main-agencia",
                                    title: "Agencia",
                                    description: "Puedes visitar nuestra agencia.",
                                },
                                {
                                    id: "main-contacto",
                                    title: "Centro de contacto",
                                    description: "Te atenderá uno de nuestro agentes",
                                },
                            ],
                        },
                    ],
                },
            },
        });
        return data;
    }
    SampleLocation(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            type: "location",
            location: {
                latitude: "4.616795816925093",
                longitude: "-74.05494961888665",
                name: "Monserrate",
                address: "Bogotá",
            },
        });
        return data;
    }
}
const sampleModel = new SampleModel();
exports.default = sampleModel;
