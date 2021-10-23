
module.exports = {
    name:'next',
    desc: 'Reproduce la siguiente cancion de la lista',
    usage: '!next',
    aliases: ["n"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {     
        message.channel.send("Reproduciendo cancion siguiente.");
        distube.jump(message, 1);
    }
}