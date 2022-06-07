const discord = require('discord.js')

const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
console.log("Bot : reCAPTCHA | ON");
client.user.setActivity("Verified Connexion Web");
});

client.login('process.env.TOKEN');
