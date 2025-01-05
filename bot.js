const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body.toLocaleLowerCase() == 'ping') {
        msg.reply('pong');
    }
});

const qrcode = require('qrcode-terminal');

// Supondo que "qr" é a string recebida (o texto do QR Code gerado)
client.on('qr', (qr) => {
    console.log("QR Code recebido. Escaneie no WhatsApp:");
    qrcode.generate(qr, { small: true }); // { small: true } reduz o tamanho no terminal
});

client.initialize();