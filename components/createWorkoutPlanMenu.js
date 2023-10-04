export const createWorkoutPlanMenu = async (bot, msg) => {
    const chatId = msg.chat.id
    const messageText = 
    'Моя система максимально подходит для тех, кто хочет улучшить время на дистанциях от 1 до 5км. ' + 
    'Также она поможет Вам разобраться в видах тренировок и использовании их для достижения результатов.\n' +
    'Программа рассчитана на 10 недель.\n' +
    'Каждая неделя включает в себя 6 тренировочных дней, продолжительность тренировки составляет в среднем 30 минут.' +
    'Программа тренировок носит лишь рекомендательный характер, вы можете самостоятельно ее изменять, если чувствуете, что она слишком легка или тяжела'
    await bot.editMessageText(messageText, {chat_id: chatId, message_id: msg.message_id});
    await bot.editMessageReplyMarkup({
        inline_keyboard: [
            [{text: 'Выбрать дату начала', callback_data: '/editstartdate' }]
        ]}, {chat_id: chatId, message_id: msg.message_id})
    
}