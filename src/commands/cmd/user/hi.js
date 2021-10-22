module.exports = {
    name:'hi',
    desc: 'hi devuelve un saludo',
    usage: 'hi',
    aliases: [],
    isPrivate: false,
    guildOnly: false,
    category:'saludo',
    isOwner:true,
    run: (client,message,args) => {
        message.channel.send('Hola humano!')
    }
}