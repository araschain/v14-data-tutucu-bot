const fs = require("fs")
const { WebhookClient, AttachmentBuilder, EmbedBuilder } = require("discord.js")

module.exports.autoSaver = () => {
    const database = fs.readFileSync("./croxydb/croxydb.json", 'utf-8');
    const client = new WebhookClient({ url: "webhookURL" });

    const date = `${new Date().toLocaleDateString()}`;
    
    client.send({ embeds: [
        new EmbedBuilder()
        .setColor("Blue")
        .setFooter({ text: `${date} adlı günün verileri.` })
        .setDescription("Yukarıdan verilere ulaşabilirsiniz!")
    ],
        files: [
          new AttachmentBuilder(Buffer.from(`${database}`, "utf-8"), { name: `database-${date}.json` })
        ]
    })
}