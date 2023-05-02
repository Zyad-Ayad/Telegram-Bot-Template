import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const token = process.env.TOKEN_KEY;

const client = new TelegramBot(token, { polling: true });

const Commands = new Map();

const loadCommands = async () => {
  const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${file}.js`);

    console.log(file + ': Loaded.');
    Commands[command.help.name] = command;
  }
};

let prefix = '/';

client.on('message', (message) => {
  if (message.text.startsWith(prefix)) {
    let messageArray = message.text.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let cmd = Commands[command.slice(prefix.length)];

    cmd && cmd.run(client, message, args);
    !cmd && client.sendMessage(message.from.id, 'Command was not found!');
  }
});

loadCommands().catch(console.error);

client.on('polling_error', console.log);
