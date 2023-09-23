import { getTempo } from "../workoutPlanCreator/getTempo.js";
import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateTempoZones = async (userID, level) => {
    const userData = await getProfileInfo(userID);
    const tempos = [
        await getTempo(level, 'recovery'),
        await getTempo(level, 'aerobic'),
        await getTempo(level, 'threshold'),
        await getTempo(level, 'interval'),
        await getTempo(level, 'repeat'),
    ];
    userData.profile.tempoZones = tempos;
    updateUserInfo(userData, userID)
}

//updateTempoZones(400233058, 60)