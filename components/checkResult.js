export const checkResult = async (bot, msg) => {
    const chatId = msg.chat.id;

    await bot.editMessageText('Введите результат в формате ЧЧ:ММ:СС', {chat_id: chatId, message_id: msg.message_id});
        await bot.editMessageReplyMarkup({
            inline_keyboard: [
                [{text: 'Назад', callback_data: '/createprofile' }]
            ]}, {chat_id: chatId, message_id: msg.message_id})
}