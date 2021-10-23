
module.exports = {
    name:'previous',
    desc: 'Reproduce la cancion anterior',
    usage: '!previous',
    aliases: ["prev"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        message.channel.send("Reproduciendo cancion anterior.");
        distube.previous(message);

    }
}