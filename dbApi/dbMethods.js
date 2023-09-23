import fs from 'fs/promises';

export const getDB = async () => {
    const data = await fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
    })
    const users = (JSON.parse(data)).users;
    return users;
}

export const getProfileInfo = async (userID) => {
    const data = await fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
    })
    const users = (JSON.parse(data)).users;
    const userData = users.find(user => user.profile.userId === userID);
    return userData;

}

export const addProfileInfo = async (profileData) => {
    const data = await fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
    });
    const dataObject = JSON.parse(data);
    dataObject.users.push(profileData);
    await fs.writeFile('./db.json', JSON.stringify(dataObject, null, 2))
    //console.log(dataObject.users)
}

export const updateUserInfo = async (userData, userID) => {
    const data = await fs.readFile('./db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {

        }
    });
    const dataObject = JSON.parse(data);
    const userCurrentData = dataObject.users.find((user) => user.profile.userId === userID);
    for (let prop in userData) {
        if (userData.hasOwnProperty(prop) && userCurrentData.hasOwnProperty(prop)) {
            userCurrentData[prop] = userData[prop];
        }
    }
    //console.log(userCurrentData)
    await fs.writeFile('./db.json', JSON.stringify(dataObject, null, 2))
    console.log( 'user')
    console.log(userCurrentData)
}