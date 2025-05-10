// Menu commands for Dracula Chat Bot

// Main menu options
const mainMenu = `
Welcome to Dracula Chat Bot! Please choose an option:
1. **/ask [question]** - Ask a question, and I will answer.
2. **/sticker [emoji]** - Get a sticker based on your emoji.
3. **/language [language]** - Change the language of the bot (e.g., Sinhala, English).
4. **/group [action]** - Manage groups, send messages, or add/remove members.
5. **/info** - Learn more about this bot and its features.
6. **/help** - Get a list of all commands and how to use them.

Please choose an option by typing the corresponding command.
`;

// Function to show the main menu
const showMainMenu = () => {
  return mainMenu;
};

// Function to handle menu command interaction
const handleMenuCommand = async (message) => {
  try {
    const menuMessage = showMainMenu();
    return menuMessage;
  } catch (error) {
    console.error('Error processing menu command:', error);
    return 'Sorry, I could not process your request.';
  }
};

// Export the menu command handler
module.exports = {
  handleMenuCommand
};
