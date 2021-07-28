const credentials = require('./credentials.json');

const cherio = require('cheerio');
const requests = require('requests');

const Discord = require('discord.js');
const client = new Discord.Client();
var Prefix = "!";

client.on('ready', () => {
    console.log(`Loggined in as ${client.user.tag}`);
});

client.on('message', message => {
    let message_ = message.toString().split(' ');
    if ((!message.author.bot) && (message.member.guild.roles.cache.some(r => r.name === "Owner" || "Bot")) && (message_.includes(`${Prefix}change`, '-p'))) {
        changePrefix(message);
        console.log("You done something right for once :)");
    }

    if ((!message.author.bot) && (message.member.guild.roles.cache.some(r => r.name === "Owner" || "Bot")) && (message_.includes(`${Prefix}git`, 'get_repos'))) {
        getRepos(message);
    }
});

function changePrefix(message) {
    let _message = message.toString().split(' ');
    console.log(_message);
    Prefix = _message[2];
    console.log(`prefix has been changed to ${Prefix}`);
    message.reply(`Prefix has been changed to ${Prefix}`);

};

function getRepos(message) {
    let message_ = message.toString().split(' ');
    let user = message_[2];
    let amount = message_[3];
    const init_url = `https://github.com/${user}?tab=repositories`;
    console.log(init_url + " " + amount);
    var $ = cherio.load(init_url);

    requests(init_url)
        .on('data', function(chunk) {
            var $ = cherio.load(chunk);
            const repos = $("*[itemprop = 'name codeRepository']").text().split(' ');
            let i = 0;
            repos.forEach(element => {
                if (element != "") {
                    message.reply(`https://github.com/${user}/${element}`);
                }
            });
        })
        .on('end', function(err) {
            if (err) return console.log('connection closed due to errors', err);

            console.log('end');

        });
};


client.login(credentials.discordtoken);