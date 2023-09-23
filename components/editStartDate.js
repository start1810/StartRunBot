const textMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

export const editStartDate = async (bot, ctx) => {
    const msg = ctx.message;
    //console.log(msg.reply_markup.inline_keyboard)
    //console.log(ctx.data)
    const editedItem = (ctx.data.split('.'))[1];
    //console.log(editedItem)
    const chatId = msg.chat.id;
    const today = new Date()
    const currentDay = editedItem ? +(msg.reply_markup.inline_keyboard[1][0]).text  : today.getDate();
    const currentIndexMonth = editedItem ? textMonth.findIndex(
        index => index === (msg.reply_markup.inline_keyboard[1][1]).text) : today.getMonth();
    //console.log(currentDay)
    //console.log(currentIndexMonth)
    let day = currentDay;
    let monthIndex = currentIndexMonth;
    if (editedItem === 'day+') {
        day += 1;
    } else if (editedItem === 'day-') {
        day -= 1;
    } else if (editedItem === 'month+') {
        monthIndex += 1;
    } else if (editedItem === 'month-') {
        monthIndex -= 1;
    }
    if (day < 1) {
        day = 31;
    }
    if (day > 31) {
        day = 0;
    }
    if (monthIndex < 0) {
        monthIndex = 0;
    }
    if (monthIndex > 11) {
        monthIndex = 11;
    }
    const month = textMonth[monthIndex]
    const markup = {
        inline_keyboard: [
            [{text: '^', callback_data: '/editstartdate.day+'}, {text: '^', callback_data: '/editstartdate.month+'}],
            [{text: day, callback_data: '-'}, {text: month, callback_data: '-'}],
            [{text: 'v', callback_data: '/editstartdate.day-'}, {text: 'v', callback_data: '/editstartdate.month-'}],

        ]
    }
    
    const messageText = 'Выберите дату начала ваших тренировок'
    await bot.editMessageText(messageText, {chat_id: chatId, message_id: msg.message_id});
    await bot.editMessageReplyMarkup(markup, {chat_id: chatId, message_id: msg.message_id})
}