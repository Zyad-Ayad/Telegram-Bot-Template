
module.exports.run = async (client, message, args) => {

    client.sendMessage(message.from.id, "This command was called?");
	/*

	Calling this code using /cmd!

	Bot is passed as object named "client"
	message is passed as object called "message"
	message args are passed as list called args => /cmd hello world arg3 : ["hello", "world", "arg3"]

	To create new commands copy this file and change cmd to the new command.

	*/

}

module.exports.help = {
	name: "cmd"
}
