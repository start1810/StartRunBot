import { tempo } from "./data/runTempo.js";
import { getTempoDB } from "./data/getTempoDB.js";
import { tempos } from "./data/tempoDB.js";

export const getTempo = (level, type) => {
    const data = tempos.find(elem => elem.level === level)
    //const tempos = data.find(elem => elem.level === level)
    return data[type]
}

//console.log(await getTempo(60, 'aerobic'))
