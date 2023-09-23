const textMonth = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

export const editStartDate = async (bot, ctx) => {
    const chatId = ctx.message.chat.id;
    //console.log(ctx)
    const currentDate = new Date();
    const currentMarkup = ctx.message.reply_markup.inline_keyboard;
    if (ctx.data[ctx.data.length - 1] === '+') {
        const newMonth = +(currentMarkup[0][0].callback_data.split('.'))[1] + 1
        const newYear = +(currentMarkup[0][0].callback_data.split('.'))[2]
        //console.log(newMonth)
        currentDate.setFullYear(newYear);
        currentDate.setMonth(newMonth);
        //currentDate.setFullYear(newYear);
        //console.log(currentDate)
    } else if (ctx.data[ctx.data.length - 1] === '-') {
        const newMonth = +(currentMarkup[0][0].callback_data.split('.'))[1] - 1
        const newYear = +(currentMarkup[0][0].callback_data.split('.'))[2]
        //console.log(newMonth)
        currentDate.setFullYear(newYear);
        currentDate.setMonth(newMonth);
        //currentDate.setFullYear(newYear);
        //console.log(currentDate)
    }
    const currentMonthIndex = currentDate.getMonth();
    const month = textMonth[currentMonthIndex]
    const currentYear = currentDate.getFullYear();
    const lastDayMonth = new Date(currentYear, currentMonthIndex + 1, 0)
    //console.log(lastDayMonth.getDate())
    const daysArray = []
    for (let day = 1; day <= 35; day++) {
        daysArray.push((day <= lastDayMonth.getDate()) ? day: '');
    }
    //console.log(daysArray)
    const monthDaysMarkup = [];
    
    for (let weekInd = 0; weekInd < 5; weekInd++) {
        const week = []
        for (let day = 0; day < 7; day++) {
            week.push({text: daysArray[(weekInd * 7) + day], callback_data: `/startday.` + daysArray[(weekInd * 7) + day] + '.' + currentMonthIndex + '.' + currentYear})
            //console.log(daysArray[(week * 7) + day])
        }
        //console.log(week)
        monthDaysMarkup.push(week)
    }
    //console.log(monthDaysMarkup)
    const markup = {
        inline_keyboard: [
            [{text: `${month}, ${currentYear}`, callback_data: `monthindex.${currentMonthIndex}.${currentYear}`}],
             ...monthDaysMarkup,
             [
                {text: '<', callback_data: '/editstartdate-'},
                //{text: `${month}, ${currentYear}`, callback_data: `monthindex:${currentMonthIndex}`},
                {text: '>', callback_data: '/editstartdate+'}
            ],

        ]
    }
    const messageText = `Выберите дату начала ваших тренировок `
    //await bot.editMessageText(messageText, {chat_id: chatId, message_id: ctx.message.message_id});
    await bot.editMessageReplyMarkup(markup, {chat_id: chatId, message_id: ctx.message.message_id}) 
}

//Реализовать переклюяение месяцев