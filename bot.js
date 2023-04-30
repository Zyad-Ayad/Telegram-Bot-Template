const TelegramBot= require('node-telegram-bot-api');
const fs = require('fs');

const token = '5714804476:AAHomKVnXzCQAsHX_fmgWrbxkSN6K_vBg3E';

const client = new TelegramBot(token, {polling: true});


const Commands = new Map();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

  console.log(file + ": Loaded.")
  Commands[command.help.name] = command
}


let prefix = '/'

client.on('message', (message) => {

    if(message.text.startsWith(prefix))
    {
        let messageArray = message.text.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
        let cmd = Commands[command.slice(prefix.length)];

        if(cmd)
        {
            cmd.run(client, message, args);
        }
        else
        {
            client.sendMessage(message.from.id, "Command was not found!");
        }

        return;

    }
});

client.on("polling_error", console.log);