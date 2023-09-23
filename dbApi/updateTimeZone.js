import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateTimeZone = async (userID, timeZone) => {
    const userData = await getProfileInfo(userID);
    userData.profile.timeZone = timeZone;
    updateUserInfo(userData, userID)
}