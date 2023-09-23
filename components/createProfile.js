import TelegramBot from "node-telegram-bot-api";
import { getProfileInfo, addProfileInfo } from "../dbApi/dbMethods.js";

const isExist = (data) => {
    return data === undefined || data === null ? '✖️' : data
}

export const profileInfoText = (profile) => {
    if (profile !== undefined) { 
        const { name, gender, birth, maxHRR, level, timeZone } = profile;
        let genderText = '';
        if (gender === 'male') {
            genderText = 'Мужской'
        } else if ( gender === 'female') {
            genderText = 'Женский'
        }
        const profileString = 
        'Заполните данные, указанные ниже. ' +
        'Они нужны для адаптации бегового плана конкретно под тебя.\n'+ 
        'После указания даты рождения, будут рассчитаны приблизительные границы пульсовых зон ' +
        'Текущий уровень позволяет оценить Вашу готовность и выставить тренировочные темпы.\nПосле заполнения всех данных появится кнопка создания плана тренировок'
        const profileMarkup = {
            reply_markup: {
                    inline_keyboard: [
                    //[{text: `Имя: ${isExist(name)}`, callback_data: '/editname'}],
                    //[{text: `Пол: ${isExist(genderText)}`, callback_data: '/editgender'}],
                    [{text: `Год рождения: ${isExist(birth)}`, callback_data: '/editbirth'}],
                    //[{text: `Пульсовые зоны: ${isExist(maxHRR)}`, callback_data: '/editHRRzones'}],
                    [{text: `Текущий уровень: ${isExist(level)}`, callback_data: '/editlevel'}],
                    [{text: `Тайм-зона UTC: ${isExist(timeZone)}`, callback_data: '/edittimezone'}],
                    (typeof birth === 'number' && typeof level === 'number' && typeof timeZone === 'number') ? [{text: 'Создать тренировочный план', callback_data: '/createWorkoutPlan'}] : []
                ]}
        }
        return [profileString, profileMarkup]
    } else {
        return 'Данные не найдены'
    }
}

export const createProfile = async (bot, msg) => {
    const chatId = msg.chat.id;
    //console.log(msg)
    let profileInfo = await getProfileInfo(chatId);
    if (profileInfo === undefined) {
        //console.log(profileInfo)         
        const emptyProfileData = {
            profile: {
              userId: chatId,
              name: msg.chat.username,
              //gender: null,
              birth: null,
              //weeklyValue: null,
              trainModel: [],
              //longRunDay: null,
              level: null,
              HRRzones: [],
              tempoZones: [],
              competitonDate: null
            },
            workoutsPlan: [],
            workouts: []
          }
        await addProfileInfo(emptyProfileData);
    } 
    profileInfo = await getProfileInfo(chatId)
    const profileText = profileInfoText(profileInfo.profile);               
    if (profileText) {
        await bot.editMessageText(profileText[0], {chat_id: chatId, message_id: msg.message_id})
        await bot.editMessageReplyMarkup(profileText[1].reply_markup, {chat_id: chatId, message_id: msg.message_id})
        //console.log(profileText)
    }
}

export const editProfile = async (bot, msg) => {
    const chatId = msg.chat.id;
    //console.log(msg)
    let profileInfo = await getProfileInfo(chatId);
    if (profileInfo === undefined) {
        //console.log(profileInfo)         
        const emptyProfileData = {
            profile: {
              userId: chatId,
              name: msg.chat.username,
              //gender: null,
              birth: null,
              //weeklyValue: null,
              trainModel: [],
              //longRunDay: null,
              level: null,
              HRRzones: [],
              tempoZones: [],
              competitonDate: null
            },
            workoutsPlan: [],
            workouts: []
          }
        await addProfileInfo(emptyProfileData);
    } 
    profileInfo = await getProfileInfo(chatId)
    const profileText = profileInfoText(profileInfo.profile);               
    if (profileText) {
        await bot.sendMessage(chatId, profileText[0], {
            reply_markup: profileText[1].reply_markup
        })
        //await bot.editMessageReplyMarkup(profileText[1].reply_markup, {chat_id: chatId, message_id: msg.message_id})
        //console.log(profileText)
    }
}