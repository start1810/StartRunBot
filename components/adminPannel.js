import { getDB } from "../dbApi/dbMethods.js";

export const adminData = async () => {
    const data = await getDB()
    const activeUsers = data.filter(user => user.profile.startDate)
    const usersInfo = 
    'Количество пользователей: ' + data.length + '\n' + 
    'Количество тренирующихся пользователей: ' + activeUsers.length


    //console.log(usersInfo);
    return usersInfo;
}