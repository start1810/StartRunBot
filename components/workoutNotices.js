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
const startNoticesHours = 17;
const quantityWorkots = 63;

const sendNotices2 = (bot, timeZone, rule) => {
    schedule.scheduleJob(rule, async () => {
        const users = await getDB();
        const userGroup = users.filter(user => (user.profile.timeZone >= timeZone) && (user.profile.timeZone < timeZone + 6));
        const currentTime = new Date();
        const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
        //console.log(currentDate.getTime() + 'THIS TIME')

        userGroup.map((user) => {
            const startDate = user.profile.startDate;
            const workoutIndex = (currentDate - startDate) / 1000 / 60 / 60 / 24;
            console.log(user)
            console.log(workoutIndex)

            if (workoutIndex >= 0 && workoutIndex < quantityWorkots) {
                const chatId = user.profile.userId;
                const level = user.profile.level;
                const birthYear = user.profile.birth;
                const maxHRR = 220 - (currentDate.getFullYear() - birthYear);
                const workout = getAdaptedWorkout(level, maxHRR, workoutPlan5km[workoutIndex + 1])
                const workoutText ='Привет! Твоя тренировка на завтра:\n' + getWorkoutView(workout);
                //console.log(workoutIndex + 'INDEX')
                bot.sendMessage(chatId, workoutText)
            }
            setTimeout(() => {}, messageDelay)
        })
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

    const rule1 = new schedule.RecurrenceRule();
    rule1.hour = startNoticesHours;
    //rule1.minute = 51
    sendNotices2(bot, 0, rule1)
    
    const rule2 = new schedule.RecurrenceRule();
    rule2.hour = startNoticesHours + 6;
    //sendNotices2(bot, 6, rule1)

    const rule3 = new schedule.RecurrenceRule();
    rule3.hour = startNoticesHours + 12;
    //sendNotices2(bot, 12, rule1);

    const rule4 = new schedule.RecurrenceRule();
    rule4.hour = startNoticesHours + 18;
    //sendNotices2(bot, 18, rule1)
    
}