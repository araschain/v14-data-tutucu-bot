const { Events } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: Events.InteractionCreate,
  once: false,
  
  async execute(client, interaction) {
    if(interaction.isChatInputCommand()) {
		if (!interaction.guild) return;

	for(let props of fs.readdirSync("./src/commands")) {
			const command = require(`../commands/${props}`);

			if(interaction.commandName.toLowerCase() === command.name.toLowerCase()) {

        		return command.execute(client, interaction);

        }
		  }	
	  }
  }
}