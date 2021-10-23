module.exports = {
    name:'play',
    desc: 'Reproduce la cancion elegida',
    usage: '!play <link> o <nombre cancion>',
    aliases: ["p"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        distube.play(message, args.join(' '));
    }
}