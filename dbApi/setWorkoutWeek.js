import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const setWorkoutWeek = async (userID, workoutWeek) => {
    const userData = await getProfileInfo(userID);
    userData.workoutsPlan = workoutWeek;
    updateUserInfo(userData, userID)
};