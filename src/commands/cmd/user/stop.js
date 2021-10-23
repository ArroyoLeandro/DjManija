
module.exports = {
    name:'stop',
    desc: 'Detiene la lista de reproducción',
    usage: '!stop',
    aliases: ["s"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        message.channel.send("Reproducción detenida.");
        distube.stop(message);
    }
}