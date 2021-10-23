const { Client, Intents, Collection } = require('discord.js'); 
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const client = new Client({ intents: 32767 });
const fs = require('fs-extra');
const path = require('path');

const DisTube = require('distube');


const { BOT } = require('./config');


const distube = new DisTube.default(client,{
    emitNewSongOnly: true,
    searchSongs: 1,
    leaveOnStop:true,
    leaveOnFinish:true,
    leaveOnEmpty:true,
});


distube.on("addSong", (queue, song) => queue.textChannel.send(
    `Añadiendo ${song.name}  \`**${song.formattedDuration}**\` - a la lista de reproducción.`
));


client.commands = new Collection();

client.on('ready', () => {
    console.log(`${client.user.username} - Esta online`);
});

const events = fs.readdirSync(path.join(__dirname, 'events'));
for (const file of events){
    const event = require(path.join(__dirname, 'events', file));
    client.on(event.name, (...args) => event.run(client, ...args,distube));
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