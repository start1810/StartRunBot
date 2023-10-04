import { getDB } from "../dbApi/dbMethods.js"
import { workoutPlan5km } from "../workoutPlanCreator/5kmFirstLevel.js";
import { getAdaptedWorkout } from "../workoutPlanCreator/getAdaptedWorkout.js";
import { getWorkoutView } from "../workoutPlanCreator/workoutView.js";
import schedule from "node-schedule";

/*
const text = 'Уведомление о тренировке'

const countTimeout = () => {
    const startTime = new Date();
    startTime.setHours(19, 0, 0);
    const startTimeout = (startTime.getTime() - (new Date()).getTime());
    return startTimeout
}
const sendNotices = async (bot, userGroup, startTimeout) => {
    const currentTime = new Date();
    const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate())
    setTimeout(() => {
        userGroup.map(async (user) => {
            const startDate = user.profile.startDate;
            const chatId = user.profile.userId;
            const workoutIndex = ((currentDate - startDate) / 1000 / 60 / 60 / 24) + (new Date(startDate)).getDay();
            const level = user.profile.level;
            const birthYear = user.profile.birth;
            //console.log(user)
            if (workoutIndex >= 0) {
                const maxHRR = 220 - (currentDate.getFullYear() - birthYear);
                const workout = await getAdaptedWorkout(level, maxHRR, workoutPlan5km[workoutIndex])
                const workoutText ='Привет! Твоя тренировка на завтра:\n' + getWorkoutView(workout)
                console.log(workoutText)
                bot.sendMessage(chatId, workoutText)
            }
        })
        setInterval(() => {
            userGroup.map(async (user) => {
                const startDate = user.profile.startDate;
                const chatId = user.profile.userId;
                const workoutIndex = (currentDate - startDate) / 1000 / 60 / 60 / 24;
                const level = user.profile.level;
                const birthYear = user.profile.birth;
                console.log(user)
                if (workoutIndex >= 0) {
                    const maxHRR = 220 - (currentDate.getFullYear() - birthYear);
                    const workout = await getAdaptedWorkout(level, maxHRR, workoutPlan5km[workoutIndex])
                    const workoutText ='Привет! Твоя тренировка на завтра:\n' + getWorkoutView(workout)
                    bot.sendMessage(chatId, workoutText)
                }
            })
        }, 24 * 60 * 60 * 1000)
    }, startTimeout < 0 ? startTimeout + 24 * 60 * 60 * 1000 : startTimeout)
}
*/
const messageDelay = 1000;
const startNoticesHours = 20;
const quantityWorkots = 63;

const sendNotices2 = (bot, timeZone) => {
    const sendTime = startNoticesHours - timeZone < 0 ? startNoticesHours - timeZone + 24 : startNoticesHours - timeZone
    const timeStart = `21 ${sendTime} * * *`
    //const timeStart = `${29 - timeZone} 47 * * *`
    schedule.scheduleJob(timeStart, async () => {
        const users = await getDB();
        const userGroup = users.filter(user => (+user.profile.timeZone === timeZone));
        console.log(userGroup)
        const currentTime = new Date();
        const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
        //console.log(currentDate.getTime() + 'THIS TIME')

        userGroup.map((user) => {
            const startDate = user.profile.startDate;
            const workoutIndex = (currentDate - startDate) / 1000 / 60 / 60 / 24;
            //console.log(user)
            //console.log(workoutIndex)

            if (workoutIndex >= 0 && workoutIndex < quantityWorkots) {
                const chatId = user.profile.userId;
                const level = user.profile.level;
                const birthYear = user.profile.birth;
                const maxHRR = 220 - (currentDate.getFullYear() - birthYear);
                const workout = getAdaptedWorkout(level, maxHRR, workoutPlan5km[workoutIndex + 1])
                const workoutText = 
                '<b>Твоя тренировка на завтра:</b>\n' + 
                '\n' + 
                getWorkoutView(workout) +
                '\n' +
                '/myzones - посмотреть тренировочные зоны';
                //console.log(workoutIndex + 'INDEX')
                try {
                    bot.sendMessage(chatId, workoutText, {parse_mode: 'HTML'})
                }
                catch {
                    console.log('сообщение не отправилось')
                }
            }
            setTimeout(() => {}, messageDelay)
        })
        console.log('Уведомления для временной зоны ' + timeZone)
    })
}

export const workoutNotices = async (bot) => {
    //const users = await getDB();
    //console.log()
    //const firstGroup = users.filter(user => user.profile.timeZone < 6);
    //const secondGroup = users.filter(user => (user.profile.timeZone >= 6) && (user.profile.timeZone < 12));
    //const thirdGroup = users.filter(user => (user.profile.timeZone >= 12) && (user.profile.timeZone < 18));
    //const fourthGroup = users.filter(user => (user.profile.timeZone >= 18) && (user.profile.timeZone < 24));
    console.log("Уведомление придет в " + startNoticesHours);
    //const testRule = new schedule.RecurrenceRule();
    //testRule.second = startNoticesHours;
    //sendNotices2(bot, 0, testRule)
    for (let timeZone = 0; timeZone < 24; timeZone ++) {
    sendNotices2(bot, timeZone)
    } 
}