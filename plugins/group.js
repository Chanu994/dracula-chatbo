const axios = require('axios');

// Function to get group information
const getGroupInfo = async (groupId, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/groups/${groupId}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching group information:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Function to send a message to a group
const sendGroupMessage = async (groupId, message, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/messages`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const data = {
    messaging_product: "whatsapp",
    to: groupId,
    type: "text",
    text: {
      body: message,
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error sending group message:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Function to add a member to a group
const addMemberToGroup = async (groupId, phoneNumber, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/groups/${groupId}/members`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const data = {
    phone_numbers: [phoneNumber], // Array of phone numbers to add
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error adding member to group:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Function to remove a member from a group
const removeMemberFromGroup = async (groupId, phoneNumber, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/groups/${groupId}/members`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const data = {
    phone_numbers: [phoneNumber], // Array of phone numbers to remove
  };

  try {
    const response = await axios.delete(url, { headers, data });
    return response.data;
  } catch (error) {
    console.error("Error removing member from group:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Function to leave a group
const leaveGroup = async (groupId, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/groups/${groupId}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error leaving group:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Function to create a new group
const createGroup = async (groupName, members, accessToken, phoneNumberId, version) => {
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/groups`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const data = {
    name: groupName,
    members: members, // Array of phone numbers to add to the group
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating group:", error.response ? error.response.data : error.message);
    return null;
  }
};

module.exports = {
  getGroupInfo,
  sendGroupMessage,
  addMemberToGroup,
  removeMemberFromGroup,
  leaveGroup,
  createGroup
};
