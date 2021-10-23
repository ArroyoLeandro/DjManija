const { MessageEmbed } = require('discord.js'); 

const fs = require('fs-extra');
const path = require('path');


const { BOT } = require('../../../config');


module.exports = {
    name:'help',
    desc: 'Muestra comandos actuales',
    usage: '!help <comando>',
    aliases: ["h"],
    isPrivate: false,
    guildOnly: false,
    category:'reproductor',
    isOwner:true,
    run: (client,message,args,distube) => {

        let [cmdnameOriginal,...cmdargs] = message.content.slice(BOT.prefix.length).trim().split(/ +/g);
        
        //creo el contenedor de los comandos
        const embedHelp = new MessageEmbed()
        .setColor('#E9B20B')
        .setTitle('Ayuda')
        .setDescription('Listado de comandos disponibles')
        .setFooter('Escriba !help <comando> para obtener informacion sobre un comando en especifico.');
        const embedHelpCommand = new MessageEmbed()
        .setColor('#E9B20B')
        .setTitle('Informacion del comando:')
        .setFooter('Escriba !help para obtener informacion sobre los comando disponibles.');

        //guardo el directorio de mi carpeta cmd
        const folders = fs.readdirSync(path.join(__dirname));

        for(const files of folders){ //entro dentro de user
            const cmd = require(path.join(__dirname,files)); //cmd es el comando completo (command.js)

            Object.keys(cmd).forEach(key => { //recorro el comando para buscar el "usage"
                switch(key){
                    case 'name':
                        if(cmd[key] === cmdargs[0]){
                            embedHelpCommand.addFields({  name: cmd['usage'], value:cmd['desc']  });
                        }
                        else{
                            embedHelp.addFields({  name: '\u200B', value: BOT.prefix+cmd[key],inline: true  });
                        }
                    break;
                    defalut: 
                    break;
                }
            });
        }

           
            // muestro mi contenedor con la info
            if(cmdargs.length > 0){//si envio argumento muestro info sobre comando especifico                  
                message.channel.send({embeds:[embedHelpCommand]});
            }
            else{
                message.channel.send({
                    embeds:[embedHelp]
                });
            }
            
        
    }
}