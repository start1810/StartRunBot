export const rest = {
    name: 'Отдых'
}

export const recovery = {
    name: 'Восстановительная тренировка',
    workouts: [
        [{zone: 1, time: 1200}],
        [{zone: 1, time: 1500}],
        [{zone: 1, time: 1800}],
        [{zone: 1, time: 2100}],
        [{zone: 1, time: 2400}],
        [{zone: 1, time: 2700}],
        [{zone: 1, time: 3000}],
        [{zone: 1, time: 3300}],
        [{zone: 1, time: 3600}],
    ]
}

export const base = {
    name: 'Базовая тренировка',
    workouts: [
        [
            {zone: 1, time: 300},
            {zone: 2, time: 600},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 900},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1200},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1500},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1800},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2100},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2400},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2700},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 3000},
            {zone: 1, time: 300}
        ],
    ]
}

export const fastfinish = {
    name:'Тренировка с быстрым финишем',
    workouts: [
        [
            {zone: 1, time: 300},
            {zone: 2, time: 900},
            {zone: 3, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1200},
            {zone: 3, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1200},
            {zone: 3, time: 600}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1500},
            {zone: 3, time: 600}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1500},
            {zone: 3, time: 720}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 1800},
            {zone: 3, time: 720}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2100},
            {zone: 3, time: 720}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2100},
            {zone: 3, time: 900}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2400},
            {zone: 3, time: 900}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 2700},
            {zone: 3, time: 900}
        ],
    ]
}

export const fartlek = {
    name: 'Фартлек',
    workouts: [
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 3,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 5,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 4,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 6,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 5,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 7,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 6,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 8,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 9,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 7,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 8,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 10,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 9,  time: 120, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 12,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
    ]
}

export const longinterval = {
    name: 'Длинные интервалы',
    workouts: [
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 3,  time: 180, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 4,  time: 180, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 3,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 5,  time: 180, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 6,  time: 180, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 4,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 5,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 6,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 7,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 4, repeat: 8,  time: 300, recovery: 180},
            {zone: 1, time: 300}
        ],
    ]
}
export const repeat = {
    name: 'Повторная тренировка',
    workouts: [
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 6,  time: 30, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 8,  time: 30, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 6,  time: 60, recovery: 180},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 10,  time: 30, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 12,  time: 30, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 8,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 6,  time: 90, recovery: 150},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 10,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 8,  time: 90, recovery: 150},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 12,  time: 60, recovery: 120},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 10,  time: 90, recovery: 150},
            {zone: 1, time: 300}
        ],
        [
            {zone: 1, time: 300},
            {zone: 2, time: 300},
            {zone: 5, repeat: 12,  time: 90, recovery: 150},
            {zone: 1, time: 300}
        ],
    ]
}