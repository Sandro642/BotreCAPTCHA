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

client.login('OTc5ODcwNDM0MjgxNTM3NTc2.GYRC0x.0shJImrO8L4ONYlhkt0RJyzqi5bqXYLHfcM8EE')