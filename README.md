
## Telegram Bot Template

This is a Telegram bot template implemented in **Node.js**. You are welcome to use and edit this code for your personal use.

### How to Use

To use this template, follow these steps:

1. Make a Telegram bot and paste the bot token in the `token` variable in the `bot.js` file.
2. Change the implementation in `/commands/Command template.js` to create your own command.
3. To make more commands, duplicate the command template in the same folder.

### Notes

- To call the command template, use `/cmd` in the bot chat.
- Make sure to edit the name of every new command to call them properly. 
- The name of the command is in the command file as follows:

```js 
module.exports.help  = {
name: "cmd"
}
