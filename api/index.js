require('dotenv').config()
const { Bot, webhookCallback } = require('grammy')

const bot = new Bot(process.env['TOKEN'])

bot.on("message", async ctx => {
  ctx.reply(ctx.msg.text)
}) 

await bot.api.setWebhook(process.env['WEBHOOK'])

module.exports = (req, res) => {
  webhookCallback(bot, 'http')(req, res)
}