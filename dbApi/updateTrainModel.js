import { periodMaker } from "../workoutPlanCreator/periodMaker.js";
import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateTrainModel = async (userID, periods) => {
    const userData = await getProfileInfo(userID);
    userData.profile.trainModel = periods;
    updateUserInfo(userData, userID)
}