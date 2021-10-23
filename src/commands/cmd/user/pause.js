
module.exports = {
    name:'pause',
    desc: 'Pausa la cancion actual',
    usage: '!pause',
    aliases: [],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        message.channel.send('Pausando reproducción.');
        let queue = distube.getQueue(message);
        distube.pause(queue);
    }
}