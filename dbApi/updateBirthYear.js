import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateBirthYear = async (userID, date) => {
    const userData = await getProfileInfo(userID);
    userData.profile.birth = date;
    updateUserInfo(userData, userID)
};