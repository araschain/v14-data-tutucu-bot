const { Events } = require("discord.js");
const { autoSaver } = require("../Utils/index.js")

module.exports = {
  name: Events.ClientReady,
  once: true,
  
  async execute(client) {
    console.log(`${client.user.tag} HAZIR.`)

    setInterval(() => {autoSaver(client)}, 60) // süresini ayarlayabilirsiniz!

  }
}