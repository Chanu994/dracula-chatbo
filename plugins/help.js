// Help commands for Dracula Chat Bot

// List of commands the bot supports
const helpCommands = `
Welcome to Dracula Chat Bot! Here's a list of commands you can use:

1. **/start** - Start interacting with the bot.
2. **/help** - Show this help message.
3. **/ask [question]** - Ask a question, and the bot will try to answer it.
4. **/language [language]** - Change the language of the bot. Supported languages: Sinhala, English.
5. **/group [action]** - Manage groups. You can add/remove members or send messages to a group.
6. **/sticker [emoji]** - Get a sticker based on your emoji.
7. **/info** - Get information about the bot and its functionalities.
8. **/leave** - Leave the current group.

You can also ask me anything! I will answer as best as I can.
`;

// Function to show help message
const showHelpMessage = () => {
  return helpCommands;
};

// Function to handle help command interaction
const handleHelpCommand = async (message) => {
  try {
    const helpMessage = showHelpMessage();
    return helpMessage;
  } catch (error) {
    console.error('Error processing help command:', error);
    return 'Sorry, I could not process your request.';
  }
};

// Export the help command handler
module.exports = {
  handleHelpCommand
};
