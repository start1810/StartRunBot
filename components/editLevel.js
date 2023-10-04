import { countLevel } from "../countLevel.js";
import { updateUserInfo, getProfileInfo } from "../dbApi/dbMethods.js";
import { getTempo } from "../workoutPlanCreator/getTempo.js";


const validateTime = (time) => {
    const regExp = /\d\d:\d\d:\d\d/;
    const lengthValidate = (time.length === 8);
    const formatValidate = regExp.test(time);
    return formatValidate && lengthValidate;
}

export const editLevel = async (bot, msg) => {
    const chatId = msg.chat.id;
    const editedMessage = 
    'Ваш уровень подготовленности будет рассчитан на основе ваших последних лучших результатов.\n' +
    'Выберите дистанцию на которой вы показали лучшее время за последние 3 недели, а затем введите время ее прохождения.\n' +
    'Вы так же можете примерно оценить свои возможности и ввести свое потенциальное время на одной из дистанций'
    await bot.editMessageText( editedMessage, {chat_id: chatId, message_id: msg.message_id});
    await bot.editMessageReplyMarkup({
        inline_keyboard: [
            [{text: '1500м', callback_data: '1500m'}, {text: '3000м', callback_data: '3000m'}, {text: '5000м', callback_data: '5000m'}],
            [{text: 'Назад', callback_data: '/createprofile' }]
        ]}, {chat_id: chatId, message_id: msg.message_id})
}

export const checkResult = async (bot, msg) => {
    const chatId = msg.chat.id;

    await bot.editMessageText('Введите результат в формате ЧЧ:ММ:СС', {chat_id: chatId, message_id: msg.message_id});
        await bot.editMessageReplyMarkup({
            inline_keyboard: [
                [{text: 'Назад', callback_data: '/createprofile' }]
            ]}, {chat_id: chatId, message_id: msg.message_id})
}

export const editLevelMessage = async (bot, msg, distance) => {
    const bestTime = msg.text;
    const chatId = msg.chat.id;
    if (validateTime(bestTime)) {
        const [hours, minutes, seconds] = bestTime.split(':');
        const bestTimeSec = (+hours * 3600) + (+minutes * 60) + (+seconds);
        const level = countLevel(distance, bestTimeSec) < 30? 30 : countLevel(distance,bestTimeSec);
        //console.log(level);
        const userInfo = await getProfileInfo(chatId);
            userInfo.profile.level = level;
            const tempos = [
                await getTempo(level, 'recovery'),
                await getTempo(level, 'aerobic'),
                await getTempo(level, 'threshold'),
                await getTempo(level, 'interval'),
                await getTempo(level, 'repeat'),
            ];
            userInfo.profile.tempoZones = tempos;
            await updateUserInfo(userInfo, chatId);
        bot.deleteMessage(chatId, msg.message_id)
        bot.deleteMessage(chatId, msg.message_id-1)
        bot.sendMessage(chatId, 'Изменения сохранены', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Продолжить редактирование', callback_data: '/createprofile'}]
                ]
            }
        })
    } else {
        bot.deleteMessage(chatId, msg.message_id)
        bot.deleteMessage(chatId, msg.message_id-1)
        bot.sendMessage(chatId, 'Я не смог разобрать Ваш ответ. Необходимо ввести время в формате ЧЧ:ММ:СС\n Например:00:17:33', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Попробовать снова', callback_data: '/editlevel'}]
                ]
            }
        })
    }
    
}