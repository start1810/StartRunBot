export const countHRRzones = ( age ) => {
    const maxHRR = 220 - age;
    const recoveryHRR = Math.round(0.66 * maxHRR);
    const aerobicHRR = Math.round(0.75 * maxHRR);
    const anaerobicHRR = Math.round(0.89 * maxHRR);
    const pickHRR = Math.round(0.93 * maxHRR);

    const zones = [ recoveryHRR, aerobicHRR, anaerobicHRR, pickHRR, maxHRR ];

    return zones
}

//console.log(countHRRzones(25));