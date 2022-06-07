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

client.login('OTc5ODcwNDM0MjgxNTM3NTc2.GkHTKl.LhsZCCB5SnyOt2A_582CiXdCAFy-7UBm0aeA90');
