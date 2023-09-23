import { getProfileInfo, updateUserInfo } from "./dbMethods.js";

export const updateStartDate = async (userID, date) => {
    console.log( "i'm update")
    const userData = await getProfileInfo(userID);
    userData.profile.startDate = date;
    console.log(userData.profile)
    updateUserInfo(userData, userID)
}