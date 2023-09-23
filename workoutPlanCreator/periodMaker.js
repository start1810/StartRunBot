const weekDivision = [
    [1, 2, 3, 13, 21, 23],
    [7, 8, 9, 18, 19, 20],
    [10, 11, 12, 14, 15, 16],
    [4, 5, 6, 17, 22, 24]];

export const periodMaker = (weeksForWorkout) => {
    const periods = weekDivision.map((elem) => {
        let count = 0;
        for (const item in elem) {
            if (elem[item] <= weeksForWorkout) {
                count +=1;
            }
        }
        return count
    });
    return periods;
}
