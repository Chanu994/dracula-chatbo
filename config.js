// config.js

require('dotenv').config();

module.exports = {
  bot: {
    name: 'ඩ්‍රැකියුලා චැටි බොටි',
    version: '1.0.0',
    language: ['si', 'en'],
    description: 'OpenAI සමඟ සම්බන්ධ වූ ආදරණීය WhatsApp බොට් එකක්',
  },

  admin: {
    number: process.env.ADMIN_NUMBER || '+94762460133',
    permissions: ['add', 'remove', 'update', 'view'],
  },

  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2048,
  },

  whatsapp: {
    accessToken: process.env.ACCESS_TOKEN,
    phoneNumberId: process.env.PHONE_NUMBER_ID,
    version: process.env.VERSION || 'v17.0',
  },

  storage: {
    provider: 'mega',
    credentials: {
      email: process.env.MAGEZN_EMAIL,
      password: process.env.MAGEZN_PASSWORD,
    },
    encryption: true,
    adminOnlyAccess: true,
  },

  features: {
    voiceToText: true,
    mediaSearch: true,
    aiAssistant: true,
    groupManagement: true,
    stickerSupport: true,
  },

  security: {
    allowOnlyAdminToModify: true,
    hideSensitiveData: true,
  },
};
