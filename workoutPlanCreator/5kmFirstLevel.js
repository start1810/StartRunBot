import { base, fartlek, fastfinish, longinterval, recovery, repeat } from "./workoutTasks.js";

export const getWorkout = (type, number, level) => {
    const workout = {}
    switch (type) {
        case 'base' :
            workout.name = '<a href="https://t.me/startrunner/98">Базовая тренировка</a>';
            workout.title = base.workouts[number];
            break
        case 'recovery' :
            workout.name = '<a href="https://t.me/startrunner/98">Восстановительная тренировка</a>';
            workout.title = recovery.workouts[number];
            break
        case 'fartlek' :
            workout.name = 'Фартлек';
            workout.title = fartlek.workouts[number];
            break
        case 'longinterval' :
            workout.name = 'Длинные интервалы';
            workout.title = longinterval.workouts[number];
            break
        case 'fastfinish' :
            workout.name = 'Тренировка с быстрым финишем';
            workout.title = fastfinish.workouts[number];
            break
        case 'repeat' :
            workout.name = 'Повторная тренировка';
            workout.title = repeat.workouts[number];
            break
        case 'rest' :
            workout.name = 'Отдых';
            workout.title = [];
            break
    }
    return workout
}

const level = 60;

export const basePeriod = [
    [
        getWorkout('base', 0, level), getWorkout('recovery', 0, level), getWorkout('fartlek', 0, level), getWorkout('recovery', 0, level), getWorkout('base', 1, level), getWorkout('recovery', 1, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fastfinish', 0, level), getWorkout('base', 1, level), getWorkout('base', 1, level), getWorkout('fartlek', 2, level), getWorkout('base', 1, level), getWorkout('base', 2, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fastfinish', 0, level), getWorkout('base', 1, level), getWorkout('base', 1, level), getWorkout('fartlek', 0, level), getWorkout('base', 1, level), getWorkout('base', 2, level), getWorkout('rest', 1, level)
    ],
];

export const techPeriod = [
    [
        getWorkout('fartlek', 2, level), getWorkout('base', 3, level), getWorkout('base', 3, level), getWorkout('repeat', 1, level), getWorkout('recovery', 3, level), getWorkout('fastfinish', 2, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fartlek', 3, level), getWorkout('base', 4, level), getWorkout('base', 4, level), getWorkout('repeat', 2, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 3, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fartlek', 4, level), getWorkout('base', 4, level), getWorkout('base', 3, level), getWorkout('repeat', 1, level), getWorkout('recovery', 2, level), getWorkout('fastfinish', 2, level), getWorkout('rest', 1, level)
    ]
];

export const intervalPeriod = [
    [
        getWorkout('fartlek', 4, level), getWorkout('recovery', 4, level), getWorkout('base', 4, level), getWorkout('longinterval', 1, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 4, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fartlek', 5, level), getWorkout('recovery', 5, level), getWorkout('base', 5, level), getWorkout('longinterval', 2, level), getWorkout('recovery', 5, level), getWorkout('fastfinish', 5, level), getWorkout('rest', 1, level)
    ],
    [
        getWorkout('fartlek', 6, level), getWorkout('recovery', 4, level), getWorkout('base', 4, level), getWorkout('longinterval', 1, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 4, level), getWorkout('rest', 1, level)
    ]
];

export const competitionPeriod = [
    [
        'longinterval1', 'recovery3', 'recovery3', 'fartlek1', 'recovery1', 'competition'
    ]
];

export const workoutPlan5km = [
    getWorkout('base', 0, level), getWorkout('recovery', 0, level), getWorkout('fartlek', 0, level), getWorkout('recovery', 0, level), getWorkout('base', 1, level), getWorkout('recovery', 1, level), getWorkout('rest', 1, level),
    getWorkout('fastfinish', 0, level), getWorkout('base', 1, level), getWorkout('base', 1, level), getWorkout('fartlek', 2, level), getWorkout('base', 1, level), getWorkout('base', 2, level), getWorkout('rest', 1, level),
    getWorkout('fastfinish', 0, level), getWorkout('base', 1, level), getWorkout('base', 1, level), getWorkout('fartlek', 0, level), getWorkout('base', 1, level), getWorkout('base', 2, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 2, level), getWorkout('base', 3, level), getWorkout('base', 3, level), getWorkout('repeat', 1, level), getWorkout('recovery', 3, level), getWorkout('fastfinish', 2, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 3, level), getWorkout('base', 4, level), getWorkout('base', 4, level), getWorkout('repeat', 2, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 3, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 4, level), getWorkout('base', 4, level), getWorkout('base', 3, level), getWorkout('repeat', 1, level), getWorkout('recovery', 2, level), getWorkout('fastfinish', 2, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 4, level), getWorkout('recovery', 4, level), getWorkout('base', 4, level), getWorkout('longinterval', 1, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 4, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 5, level), getWorkout('recovery', 5, level), getWorkout('base', 5, level), getWorkout('longinterval', 2, level), getWorkout('recovery', 5, level), getWorkout('fastfinish', 5, level), getWorkout('rest', 1, level),
    getWorkout('fartlek', 6, level), getWorkout('recovery', 4, level), getWorkout('base', 4, level), getWorkout('longinterval', 1, level), getWorkout('recovery', 4, level), getWorkout('fastfinish', 4, level), getWorkout('rest', 1, level)    
]
