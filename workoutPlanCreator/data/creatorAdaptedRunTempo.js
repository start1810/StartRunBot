import { tempo } from "./runTempo.js";
import fs from 'fs/promises';

const minutesToSeconds = (time) => {
    const minutes = +time.split('.')[0];
    const seconds = minutes * 60 + +time.split('.')[1]
    return seconds
}
const recoveryTempo = tempo.easy.map(elem => {
    const tempo = elem.split('-')[1];
    const tempoSec = minutesToSeconds(tempo)
    return tempoSec
})

const aerobicTempo = tempo.easy.map(elem => {
    const tempo = elem.split('-')[0];
    const tempoSec = minutesToSeconds(tempo)
    return tempoSec
})

const thresholdTempo = tempo.threshold.map(tempo => {
    const tempoSec = minutesToSeconds(tempo)
    return tempoSec
})

const intervalTempo = tempo.interval.map(tempo => {
    const tempoSec = minutesToSeconds(tempo)
    return tempoSec
})

const repeatTempo = tempo.repeat.map(tempo => tempo * 5)

//console.log(recoveryTempo);
//console.log(aerobicTempo);
//console.log(thresholdTempo);
//console.log(intervalTempo);
//console.log(repeatTempo);

const tempoBase = [];

for (let i = 0; i < recoveryTempo.length - 1; i++) {
    const elem = {
        level: i+30,
        recovery: recoveryTempo[i],
        aerobic: aerobicTempo[i],
        threshold: thresholdTempo[i],
        interval: intervalTempo[i],
        repeat: repeatTempo[i]
    }
    tempoBase.push(elem)
}

fs.writeFile('./tempoDB.json', JSON.stringify(tempoBase, null, 2))
//console.log(tempoBase)
