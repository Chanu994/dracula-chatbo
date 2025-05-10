const { exec } = require('child_process');

// Function to restart the bot
const restartBot = () => {
  console.log("Bot is restarting...");

  // Running a shell command to restart the bot (this works with Node.js)
  exec('pm2 restart dracula-bot', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting bot: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log("Bot has restarted successfully!");
  });
};

// Function to handle restart command
const handleRestartCommand = async (message) => {
  if (message.body.toLowerCase() === '/restart') {
    await message.reply('Bot is restarting... Please wait.');
    restartBot();
  }
};

module.exports = {
  handleRestartCommand
};
