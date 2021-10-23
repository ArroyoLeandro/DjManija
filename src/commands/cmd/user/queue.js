
module.exports = {
    name:'queue',
    desc: 'Muestra lista de reproduccion actual',
    usage: 'queue ',
    aliases: ["q"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {
        
        let queue = distube.getQueue(message);
        message.channel.send('Lista de Reproduccion Actual:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. ${song.name} - \`${song.formattedDuration}\``
        ).join("\n"));
    }
}