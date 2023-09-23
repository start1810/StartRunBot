export const getHRR = (maxHRR, zone) => {
    const correct = {
        'recovery': 1,
        'easy': 2,
        'threshold': 3,
        'interval': 4,
        'max': 5
    }
    const HRRzones = [0.7, 0.8, 0.9, 0.95, 1]
    const upperLimit = Math.floor(HRRzones[zone - 1] * maxHRR);
    const lowerLimit = Math.floor(HRRzones[zone - 2] * maxHRR);
    return  zone === 1 ? `до ${upperLimit} уд/мин` :`${lowerLimit}-${upperLimit} уд/мин`;
}