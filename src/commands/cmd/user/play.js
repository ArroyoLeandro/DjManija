module.exports = {
    name:'play',
    desc: 'Reproduce la cancion',
    usage: 'play ',
    aliases: ["p"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        distube.play(message, args.join(' '));
    }
}