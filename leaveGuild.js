const { Collection, Client, GatewayIntentBits, Partials } = require(`discord.js`);
const client = new Client({
	intents: [
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildWebhooks,
	],
	partials: [
		Partials.Message,
		Partials.Reaction,
		Partials.Channel,
	],
});

require('dotenv').config();

client.login(process.env.TOKEN);

client.once( "ready", async(client) => {
    console.log(`---------------------------`);
		client.guilds.cache.forEach(guild => {
			guild.leave();
		});
		console.log(`---------------------------`);
})