import { intervalPeriod, basePeriod } from "./5kmFirstLevel.js";
import { getAdaptedWorkout } from "./getAdaptedWorkout.js";
import { repeat } from "./workoutTasks.js";

export const secToMin = (time) => {
    const min = Math.floor(time / 60);
    const sec = `${time % 60}`.length === 1 ? `0${time % 60}` : `${time % 60}`
    return sec === '00' ? `${min}`: `${min}.${sec}`;
}
export const getWorkoutView = (workout) => {
    if ( workout.name === 'Отдых') {
        return 'Отдых'
    }
    let textOfTitle = ''
     workout.title.map(part => {
        const time = secToMin(part.time);
        const tempo = part.tempo.map(elem => secToMin(elem));
        
        /*if (part.repeat) {
            textOfTitle += `${part.repeat} раза по ${time} мин в зоне ${part.zone} (Темп: ${tempo[1]}-${tempo[0]} мин/км) через ` 
        } else if (!part.tempo[0]) {
            textOfTitle += `${time} минут в зоне ${part.zone}:(Темп: до ${tempo[1]} мин/км, пульс: ${part.HRR})` + '\n'
        } else {
            textOfTitle += `${time} минут в зоне ${part.zone}:(Темп:  ${tempo[1]}-${tempo[0]} мин/км, пульс: ${part.HRR})` + '\n'
        }*/

        if (part.repeat) {
            textOfTitle += `<i>${part.repeat} раза по ${time} мин</i> в <b>зоне ${part.zone}</b> через ` 
        } else if (!part.tempo[0]) {
            textOfTitle += `<i>${time} минут</i> в <b>зоне ${part.zone}</b>` + '\n'
        } else {
            textOfTitle += `<i>${time} минут</i> в <b>зоне ${part.zone}</b>` + '\n'
        }
    })
    const feelings = [
        'Зона1: могу бежать с таким темпом вечно',
        'Зона2: комфортный темп, я не сдерживаю и не подгоняю себя',
        'Зона3: немного тяжело, могу так бежать примерно пол часа',
        'Зона4: тяжело, выдержу не более 10 минут',
        'Зона5: очень тяжело, смогу бежать максимум минуты 3'
    ]
    const workoutView = 
    `${workout.name}` + '\n' +
    `<i>Примерная дистанция - ${workout.distance}км</i>` + '\n' +
    `Содержание:` + '\n' +
    `${textOfTitle}` 

    return workoutView
}




//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][0])))
//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][1])))
//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][2])))
//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][3])))
//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][4])))
//console.log(getWorkoutView(await getAdaptedWorkout(60, 195, intervalPeriod[2][5])))
