import { getProfileInfo } from "../dbApi/dbMethods.js";
import { updateUserInfo } from "../dbApi/dbMethods.js";
import { countHRRzones } from "../workoutPlanCreator/countHRRzones.js";
 
const validateYear = (year) => {
    const regExp = /[1-2]+[9,0]+\d\d/;
    const lengthValidate = (year.length === 4);
    const formValidate = regExp.test(year);
    return formValidate && lengthValidate;
}

export const editBirthMessage = async (bot, msg) => {
    const chatId = msg.chat.id;
    const year = msg.text;
    if (validateYear(year)) {
        const userInfo = await getProfileInfo(chatId);
            userInfo.profile.birth = +msg.text;
            const age = (new Date()).getFullYear() - userInfo.profile.birth;
            userInfo.profile.HRRzones = countHRRzones(age);
            await updateUserInfo(userInfo, chatId);
        bot.deleteMessage(chatId, msg.message_id)
        bot.deleteMessage(chatId, msg.message_id-1)
        bot.sendMessage(chatId, 'Данные обновлены', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Продолжить редактирование', callback_data: '/createprofile'}]
                ]
            }
        })
    } else {
        bot.deleteMessage(chatId, msg.message_id)
        bot.deleteMessage(chatId, msg.message_id-1)
        bot.sendMessage(chatId, 'Я не смог разобрать Ваш ответ. Необходимо год рождения\n Например: 1997', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Попробовать снова', callback_data: '/editbirth'}]
                ]
            }
        })
    }
}