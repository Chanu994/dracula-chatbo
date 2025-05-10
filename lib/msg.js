const axios = require('axios');

// Function to send a simple text message via WhatsApp API
const sendTextMessage = (recipient, text, accessToken, phoneNumberID, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberID}/messages`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  const data = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'text',
    text: {
      body: text,
      preview_url: false
    }
  };

  return axios.post(url, data, { headers })
    .then(response => {
      console.log('Message Sent:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      throw error;
    });
};

// Function to send an image message via WhatsApp API
const sendImageMessage = (recipient, imageUrl, accessToken, phoneNumberID, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberID}/messages`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  const data = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'image',
    image: { 
      link: imageUrl,
      caption: 'Here is your image!'
    }
  };

  return axios.post(url, data, { headers })
    .then(response => {
      console.log('Image Sent:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error sending image:', error.response ? error.response.data : error.message);
      throw error;
    });
};

// Function to send a video message via WhatsApp API
const sendVideoMessage = (recipient, videoUrl, accessToken, phoneNumberID, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberID}/messages`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  const data = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'video',
    video: {
      link: videoUrl,
      caption: 'Here is your video!'
    }
  };

  return axios.post(url, data, { headers })
    .then(response => {
      console.log('Video Sent:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error sending video:', error.response ? error.response.data : error.message);
      throw error;
    });
};

module.exports = {
  sendTextMessage,
  sendImageMessage,
  sendVideoMessage
};
