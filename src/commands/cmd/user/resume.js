
module.exports = {
    name:'resume',
    desc: 'Reanuda la cancion pausada',
    usage: 'resume ',
    aliases: ["r"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        message.channel.send('Reanundando reproducción.');
        let queue = distube.getQueue(message);
        distube.resume(queue)
    }
}