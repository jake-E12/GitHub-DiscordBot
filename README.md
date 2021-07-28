# GitHub-DiscordBot
a github wbescraper for discord



Run this in node js 

This is a discord bot that reads and output code repositorys from github, it outputs the link and the details about the repository.

To run this bot:

things you will need: 
node js 
ide with terminal 
npm 

before doing anything open your IDE and open index.js, then run 

npm i discord.js
npm i cheerio
npm i requests

Step 1: 
Goto https://discord.com/developers/applications and create a new application.

Step 2:
Goto bot section and create a new bot and scroll to the bottom of the page and select adminitstator as its permisions then copy your token and paste it into the index.js file on line 63 (client.Login(Paste token here))

Step 3:
Goto Oauth section and select bot then click copy at the bottom of the screen, paste this link into your web browser and select the server you want the bot to be on (ps you can only add a bot if you own the server or have admintistative permisions on the server).

Step 4: 
open node or vs code and npm run index.js. 

