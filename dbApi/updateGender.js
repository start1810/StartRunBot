import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateGender = async (userID, gender) => {
    const userData = await getProfileInfo(userID);
    userData.profile.gender = gender;
    updateUserInfo(userData, userID)
}