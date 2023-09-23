import { countLevel } from "../countLevel.js";
import { updateUserInfo, getProfileInfo } from "../dbApi/dbMethods.js";
import { getTempo } from "../workoutPlanCreator/getTempo.js";

const validateTime = (time) => {
    const regExp = /\d\d:\d\d:\d\d/;
    const lengthValidate = (time.length === 8);
    const formatValidate = regExp.test(time);
    return formatValidate && lengthValidate;
}

export const editLevelMessage = async (bot, msg, distance) => {
    const bestTime = msg.text;
    const chatId = msg.chat.id;
    if (validateTime(bestTime)) {
        const [hours, minutes, seconds] = bestTime.split(':');
        const bestTimeSec = (+hours * 3600) + (+minutes * 60) + (+seconds);
        const level = countLevel(distance, bestTimeSec)
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