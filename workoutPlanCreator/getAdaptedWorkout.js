import { basePeriod, getWorkout, intervalPeriod, techPeriod } from "./5kmFirstLevel.js";
import { getHRR } from "./getHRR.js";
import { getTempo } from "./getTempo.js";
import { repeat } from "./workoutTasks.js";


//console.log(intervalPeriod[1][0])


export const getAdaptedWorkout = (level, maxHRR, workout) => {
    const tempos = [
        getTempo(level, 'recovery'),
        getTempo(level, 'aerobic'),
        getTempo(level, 'threshold'),
        getTempo(level, 'interval'),
        getTempo(level, 'repeat'),
    ];
    //console.log(tempos)
    const HRRZones = [
        getHRR(maxHRR, 1),
        getHRR(maxHRR, 2),
        getHRR(maxHRR, 3),
        getHRR(maxHRR, 4),
        getHRR(maxHRR, 5)
    ];
    let distance = 0
    console.log(workout)
    const adaptedTitle = workout ? workout.title.map( workoutPart => {
        const part = JSON.parse(JSON.stringify(workoutPart));
        part.tempo = [tempos[workoutPart.zone - 2], tempos[workoutPart.zone - 1]];
        part.HRR = HRRZones[workoutPart.zone - 1];
        //console.log(part.tempo);
        if (part.repeat) {
            distance += Math.round(((part.time / part.tempo[1]) + (part.recovery / tempos[0])) * part.repeat)
        } else if (!part.tempo[0]) {
            distance += Math.round(part.time / part.tempo[1])
        } else if (part.tempo[0]) {
            distance += Math.round(part.time / ((part.tempo[0] + part.tempo[1])/2))
        }
        //distance += part.time / ((part.tempo[0] + part.tempo[1]) / 2);
        //console.log(distance)
        return part
    }): null;
    const adaptedWorkout = workout.name === 'Отдых' ? {
        name: workout.name,
        distance: null,
        title: null
    } : {
        name: workout.name,
        distance: distance,
        title: adaptedTitle
    }
    //console.log(workout)
    return adaptedWorkout;
}

//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][0]));
//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][1]));
//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][2]));
//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][3]));
//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][4]));
//console.log(await getAdaptedWorkout(48, 195, techPeriod[0][5]));
