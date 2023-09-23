import { levels } from "./data/runPowerLevels.js"

export const runPowerAnalizator = (distance, time) => {
    if (distance !== '1500m' && distance !== '3000m' && distance !== '5000m') {
        return 'error';
    } 
    const variance = levels[distance].map((elem) => (elem - time) ** 2);
    //console.log(variance)
    //console.log(Math.min(...variance))
    const level = variance.findIndex((elem) => elem === Math.min(...variance)) + 30
    return level;
}