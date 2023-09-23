import TelegramBot from "node-telegram-bot-api";

export const sendSubscribeMessage = async (bot, msg) => {
    const chatId = msg.chat.id;
    const textMessage = 'Подпишитесь на канал https://t.me/startrunner, чтобы пользоваться ботом'
    bot.deleteMessage(chatId, msg.message_id)
    await bot.sendMessage(chatId, textMessage, {
        reply_markup: {inline_keyboard: [
            [{text : 'Проверить подписку', callback_data: '/createprofile'}]
        ]}
    });
}
