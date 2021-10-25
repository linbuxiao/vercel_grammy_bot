require('dotenv').config()
const { Bot, webhookCallback } = require('grammy')

const bot = new Bot(process.env['TOKEN'])

bot.on("message", async ctx => {
  await ctx.reply(ctx.msg.text)
}) 



module.exports = async (req, res) => {
  await bot.api.setWebhook(process.env['WEBHOOK'])
  webhookCallback(bot, 'http')(req, res)
}