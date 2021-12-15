require("dotenv").config();

const { Client, Intents, MessageEmbed, Message, CommandInteractionOptionResolver } = require("discord.js");
const client = new Client({
        intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]
    , partials: ["CHANNEL"]
}); //the discord client aka bot itself
const prefix = "."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Your Vents | DM to Vent",{ type: "WATCHING"})
});

client.on('messageCreate', msg => {

  if(msg.channel.type === "DM"){
      let embed = new MessageEmbed()
      .setTitle("Anon Vent!")
      .setDescription(msg.content)
      .setColor("BLURPLE")
     client.channels.resolve("920671250655883285").send({embeds: [embed]})
       
  }
});
client.login(process.env.TOKEN);