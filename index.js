//npm i telegraf@3.33
const Telegraf = require('telegraf');
const bot = new Telegraf = 'ISI_TOKEN @BotFather');
//npm i axios
const axios = require('axios');

//var @bot.on(string)
bot.on('message', (ctx) => {
    const chatId = ctx.chat.id;
    const name = ctx.from.first_name;
    bot.telegram.sendMessage(chatId, 'Welcome ' + name);
});

//var @commands = /start
bot.command('start', ctx => {
    const chatId = ctx.chat.id;
    bot.telegram.sendMessage(chatId, 'Choose a menu\n/help - Untuk info tentang bot')
});

//var @commands = /help
bot.command('help', ctx => {
    const chatId = ctx.chat.id;
    bot.telegram.sendMessage(chatId, 'Bot layanan chat');
});

bot.launch();
