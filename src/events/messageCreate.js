const { BOT } = require('../config');

module.exports = {
    name: 'messageCreate',
    run(client,message,distube){
        if(message.author.bot) return;
        if(!message.content.startsWith(BOT.prefix)) return;
        // let [cmdnameOld, ...cmdargs] = message.content.slice(BOT.prefix.length).trim().split('/\s+/');
        let [cmdnameOriginal,...cmdargs] = message.content.slice(BOT.prefix.length).trim().split(/ +/g);
        const cmdname = cmdnameOriginal.toLowerCase();
        // console.log(cmdargs);
        const cmd = client.commands.get(cmdname) 
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdname));
        if(!cmd) return;
        cmd.run(client,message,cmdargs,distube);
    }   

}