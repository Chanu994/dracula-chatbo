// command.js

const fs = require('fs');
const path = require('path');

// විධාන ගබඩා කිරීම සඳහා මතකය
const commands = new Map();

// විධාන ලෝඩ් කිරීමේ ක්‍රියාවලිය
function loadCommands(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      loadCommands(fullPath);
    } else if (file.endsWith('.js')) {
      const command = require(fullPath);
      if (command.name) {
        commands.set(command.name, command);
        console.log(`🔹 විධානය ලෝඩ් කරන ලදී: ${command.name}`);
      }
    }
  }
}

// විධාන ලබාදීමේ ක්‍රියාවලිය
function getCommand(name) {
  return commands.get(name);
}

// විධාන ලෝඩ් කිරීම
loadCommands(path.join(__dirname, 'commands'));

// module.exports
module.exports = {
  getCommand,
  commands,
};
