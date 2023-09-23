import fs from 'fs/promises';

export const getTempoDB = async () => {
    const data = await fs.readFile('./workoutPlanCreator/data/tempoDB.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
    })
    const DB = JSON.parse(data);
    return DB;
}

//console.log(await getTempoDB());