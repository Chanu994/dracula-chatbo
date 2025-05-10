// Sticker generation for Dracula Chat Bot
const axios = require('axios');
const fs = require('fs');
const { client } = require('whatsapp-web.js');

// Function to send sticker
const sendSticker = async (chatId, stickerUrl) => {
  try {
    const stickerBuffer = await axios.get(stickerUrl, { responseType: 'arraybuffer' });
    const stickerFile = Buffer.from(stickerBuffer.data, 'binary');
    
    await client.sendMessage(chatId, stickerFile, { sendMediaAsSticker: true });
    console.log("Sticker sent successfully!");
  } catch (error) {
    console.error("Error sending sticker:", error);
    return 'Sorry, I could not send the sticker at this moment.';
  }
};

// Function to generate sticker based on emoji or keyword
const createSticker = async (message) => {
  const emoji = message.split(" ")[1]; // Grab emoji from the user's message
  
  // Logic for different emoji-based stickers
  const stickerUrl = await getStickerUrl(emoji);

  // Sending sticker to user
  if (stickerUrl) {
    await sendSticker(message.from, stickerUrl);
    return 'Sticker sent! Enjoy! 😄';
  } else {
    return 'Sorry, I couldn’t find a sticker for that emoji.';
  }
};

// Function to get sticker URL based on emoji or keyword
const getStickerUrl = (emoji) => {
  // Mapping emoji to a sticker (this is a placeholder for real URL or logic)
  const stickerMapping = {
    "😊": "https://example.com/sticker/1.png",
    "😂": "https://example.com/sticker/2.png",
    "😍": "https://example.com/sticker/3.png",
    "😎": "https://example.com/sticker/4.png"
  };

  return stickerMapping[emoji] || null;
};

module.exports = {
  createSticker
};
