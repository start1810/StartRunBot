import { getDB } from "../dbApi/dbMethods.js"
import { setWorkoutWeek } from "../dbApi/setWorkoutWeek.js";
import { workoutPlan5km } from "../workoutPlanCreator/5kmFirstLevel.js";


export const getWeekPlan = async (chatId, workoutPlan) => {
    const users = await getDB();
    const userData = users.find((user) => user.profile.userId === chatId);
        const startTime = userData.profile.startDate;
        const currentTime = (new Date()).getTime();
        const weekIndex = Math.floor((currentTime - startTime) / 1000 / 60 / 60 / 24 / 7);
        //console.log(weekIndex + 'djsdlkf;dhsfkjsha')
        const workoutWeekPlan = workoutPlan.slice(weekIndex * 7, weekIndex * 7 + 7);
        await setWorkoutWeek(chatId, workoutWeekPlan);
        return workoutWeekPlan;
}

