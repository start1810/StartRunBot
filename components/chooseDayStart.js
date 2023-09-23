import { updateStartDate } from "../dbApi/updateStartDate.js"
import { workoutPlan5km } from "../workoutPlanCreator/5kmFirstLevel.js"
import { getDB } from "../dbApi/dbMethods.js"
import { getAdaptedWorkout } from "../workoutPlanCreator/getAdaptedWorkout.js"
import { getWorkoutView } from "../workoutPlanCreator/workoutView.js"
import TelegramBot from "node-telegram-bot-api"
import { setWorkoutWeek } from "../dbApi/setWorkoutWeek.js"

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

export const chooseDayStart = async (bot, ctx) => {
    const chatId = ctx.message.chat.id
    
    //console.log(ctx)
    const day = +ctx.data.split('.')[1]
    const monthInd = +ctx.data.split('.')[2]
    const year = +ctx.data.split('.')[3]
    const startDate = new Date(year, monthInd, day)
    const savedDate = startDate.getTime()
    //console.log(savedDate + 'tututu')

    const currentTime = new Date();
    const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate())
    const users = await getDB();
    const userData = users.find((user) => user.profile.userId === chatId);
    const birthYear = userData.profile.birth;
    const level = userData.profile.level
    const maxHRR = 220 - (currentDate.getFullYear() - birthYear);
    //console.log(workoutPlan5km[startDate.getDay()])
    const workout = getAdaptedWorkout(level, maxHRR, (startDate.getDay() !== 0 ? workoutPlan5km[startDate.getDay() - 1] : workoutPlan5km[6]))
    const workoutText = getWorkoutView(workout)
    await updateStartDate(chatId, savedDate);
    //console.log(savedDate + ' DOLZNOSAVED')
    //await setWorkoutWeek(chatId, [])
    
    const textMessage = 'План создан! Твоя первая тренировка будет ' + day + ' ' + textMonth[monthInd] + ' ' + year + ' года' +
    '\n\nОписание тренировки:\n' + workoutText;
    await bot.deleteMessage(chatId, ctx.message.message_id)
    await bot.sendMessage(chatId, textMessage);
    
    //Вытащить дату и месяц из строк и сохранить
}