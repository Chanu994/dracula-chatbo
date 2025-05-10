// index.js

require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const { getCommand } = require('./command');
const config = require('./config');

// WhatsApp Client Initialization
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});

// QR Code Generation
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('📱 QR කේතය ස්කෑන් කරන්න');
});

// Client Ready
client.on('ready', () => {
  console.log(`✅ ${config.bot.name} සක්‍රියයි!`);
});

// Message Handling
client.on('message', async (message) => {
  try {
    const prefix = '!';
    if (!message.body.startsWith(prefix)) return;

    const args = message.body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = getCommand(commandName);

    if (!command) {
      return message.reply('⚠️ අනවශ්‍ය විධානයකි.');
    }

    await command.execute(client, message, args);
  } catch (error) {
    console.error('❌ දෝෂයක් ඇතිවිය:', error);
    message.reply('❌ විධානය ක්‍රියාත්මක කිරීමේදී දෝෂයක් ඇතිවිය.');
  }
});

// Initialize Client
client.initialize();
