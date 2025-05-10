const os = require('os');
const axios = require('axios');

// Function to check if bot is alive
const checkBotAlive = async (statusUrl) => {
  try {
    // Ping the server or status URL to check if the bot is still alive
    const response = await axios.get(statusUrl);
    
    if (response.status === 200) {
      console.log("Bot is alive and running!");
    } else {
      console.log("Bot is down or there is an issue with the server.");
    }
  } catch (error) {
    console.error("Error checking bot status:", error.message);
  }
};

// Function to log system information for debugging purposes
const logSystemInfo = () => {
  const uptime = os.uptime(); // System uptime in seconds
  const freeMemory = os.freemem(); // Free memory in bytes
  const totalMemory = os.totalmem(); // Total memory in bytes
  
  console.log("Bot System Info:");
  console.log("Uptime:", uptime, "seconds");
  console.log("Free Memory:", (freeMemory / 1024 / 1024).toFixed(2), "MB");
  console.log("Total Memory:", (totalMemory / 1024 / 1024).toFixed(2), "MB");
};

// Function to periodically check if the bot is alive
const monitorBot = (statusUrl, intervalTime = 60000) => {
  setInterval(() => {
    checkBotAlive(statusUrl);
    logSystemInfo();
  }, intervalTime); // Checks every minute by default
};

// Export functions
module.exports = {
  checkBotAlive,
  logSystemInfo,
  monitorBot
};
