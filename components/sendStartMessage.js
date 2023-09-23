import TelegramBot from "node-telegram-bot-api"

export const sendStartMessage = async (bot, msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    await bot.sendMessage(chatId, 'Привет! Я Артем, тренер клуба StArtRun. Хочешь начать бегать, стать лучше или сделать свои тренировки продуктивнее? Я помогу! Могу оценить твои возможности, подобрать зоны и темпы тренировок. Начнем?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Начнем!', callback_data: '/createprofile' }]
            ]
            //keyboard: [
            //    ['Профиль', 'Тренировки'],
            //    ['Подписка','Реферальная ссылка']
            //],
            //resize_keyboard: true
        },
           
    })
}