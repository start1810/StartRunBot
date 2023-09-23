import { levels } from "./workoutPlanCreator/data/runPowerLevels.js";

export const countLevel = (distance, time) => {
    //console.log(distance);
    //console.log(time);
    levels[distance].push(time);
    levels[distance].sort((a,b) => b - a);
    const level = levels[distance].findIndex((elem) => elem === time) - 1 + 30;
    return level;
}