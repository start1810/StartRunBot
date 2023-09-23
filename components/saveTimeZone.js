import { updateTimeZone } from "../dbApi/updateTimeZone.js";

export const saveTimeZone = async (bot, ctx) => {
    const command = ctx.data;
    const chatId = ctx.message.chat.id;
    const messageId = ctx.message.message_id;
    const hours = +command.split('.')[1];
    const currentHours = (new Date()).getHours();
    const timeZone = hours - currentHours < 0 ? hours - currentHours + 24 : hours - currentHours;
    await updateTimeZone(chatId, timeZone);
    bot.deleteMessage(chatId, messageId);
    bot.sendMessage(chatId, 'Изменения сохранены', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Продолжить редактирование', callback_data: '/createprofile'}]
            ]
        }
    })
    
}