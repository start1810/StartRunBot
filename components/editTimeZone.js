export const editTimeZone = async (bot, ctx) => {
    //console.log(ctx);
    const msg = ctx.message;
    const chatId = msg.chat.id;
    const command = ctx.data;
    const currentDate = new Date()
    const currentHours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    let hours = command[command.length - 1] === 'e' ? currentHours : +(msg.reply_markup.inline_keyboard[0][1].text.split(':')[0]);
    //let minutes = command[command.length - 1] === 'e' ? 0 : +(msg.reply_markup.inline_keyboard[2][1].text);
    if (command.split('.')[1] === 'hours+') {
        hours = hours === 24 ? 1 : hours + 1;
    } else if (command.split('.')[1] === 'hours-') {
        hours = hours === 0 ? 23 : hours - 1;
    }

    const markup = {
        inline_keyboard: [
            [{text: '<', callback_data: '/edittimezone.hours-'}, {text: `${hours}:${minutes}`, callback_data: '-'}, {text: '>', callback_data: '/edittimezone.hours+'}],
            [{text: 'Готово', callback_data: `/savetimezone.${hours}`}]
        ]
    }
    
    const text = 'Какое примерное время у вас сейчас?'
    await bot.editMessageText(text, {chat_id: chatId, message_id: msg.message_id})
    await bot.editMessageReplyMarkup(markup, {chat_id: chatId, message_id: msg.message_id})
}