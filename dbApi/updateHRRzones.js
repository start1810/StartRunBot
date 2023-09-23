import { countHRRzones } from "../workoutPlanCreator/countHRRzones.js";
import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateHRRzones = async (userID, HRRzones) => {
    if (HRRzones) {
        const userData = await getProfileInfo(userID);
        userData.profile.HRRzones = HRRzones;
        updateUserInfo(userData, userID)
    } else {
        const userData = await getProfileInfo(userID);
        const age = (new Date()).getFullYear() - userData.profile.birth
        userData.profile.HRRzones = countHRRzones(age);
        updateUserInfo(userData, userID)
    }
};

//updateHRRzones(400233058)
