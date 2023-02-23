module.exports = {
  name: "ping",
  description: "Bot'un ping değerlerini gösterir.",
  options: [],
  
  async execute(client, interaction) {
    await interaction.deferReply();
    
    return interaction.followUp({ content: `Pong! \`${client.ws.ping}ms\` ` })
  }
}