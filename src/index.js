const { Client, Intents, Collection } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs-extra');
const path = require('path');

const { BOT } = require('./config');


client.commands = new Collection();

client.on('ready', () => {
    console.log(`${client.user.username} - Esta online`);
});

const events = fs.readdirSync(path.join(__dirname, 'events'));
for (const file of events){
    const event = require(path.join(__dirname, 'events', file));
    client.on(event.name, (...args) => event.run(client, ...args));
}


//handler
const commands = fs.readdirSync(path.join(__dirname, 'commands/cmd'));
for(const folders of commands){

    const folder = fs.readdirSync(path.join(__dirname, 'commands/cmd',folders));
    for(const file of folder){
        const cmd = require(path.join(__dirname, 'commands/cmd',folders,file));
        client.commands.set(cmd.name, cmd);
    }
    
}



client.login(BOT.token);