import { getAdaptedWorkout } from "../workoutPlanCreator/getAdaptedWorkout.js"
import { getWorkoutView } from "../workoutPlanCreator/workoutView.js"
import { getDB } from "../dbApi/dbMethods.js";

export const viewWeekPlan = async (bot, msg, workoutPlan) => {
    const chatId = msg.chat.id;
    const users = await getDB();
    const userData = users.find((user) => user.profile.userId === chatId);
    const { startDate, level, birth } = userData.profile;
    const currentDate = new Date();
    const startWeekDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDay() !== 0 ? currentDate.getDate() - (currentDate.getDay() - 1) : currentDate.getDate() - 7
    )
    const maxHRR = 220 - (currentDate.getFullYear() - +birth);
    //console.log(birth)
    let textOfWeekPlan = ''
    workoutPlan.map((workout) => {
        const workoutDate = startWeekDate.toLocaleDateString();

        const textWorkout = workoutDate + '\n' + getWorkoutView(getAdaptedWorkout(level, maxHRR, workout)) + '\n'
        startWeekDate.setDate(startWeekDate.getDate() + 1)
        textOfWeekPlan += textWorkout
    })
    bot.sendMessage(chatId, textOfWeekPlan);
}