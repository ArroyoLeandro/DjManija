const fs = require('fs-extra');
const path = require('path');

module.exports = {
    name:'help',
    desc: 'Muestra comandos actuales',
    usage: 'help ',
    aliases: ["h"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {       
        const folders = fs.readdirSync(path.join(__dirname));

        for(const files of folders){
            const cmd = require(path.join(__dirname,files)); //cmd es el comando completo
            console.log(cmd);
        }
    }
}