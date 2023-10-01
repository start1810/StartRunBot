import { getDB } from "../dbApi/dbMethods.js";
import { countHRRzones } from "./countHRRzones.js";
import { getTempo } from "./getTempo.js";
import { secToMin } from "./workoutView.js";

export const getZones = async (msg) => {
    const userId = msg.chat.id
    const users = await getDB();
    const userData = users.find((user) => user.profile.userId === userId)
    const birthYear = userData.profile.birth;
    const level = userData.profile.level
    const age = birthYear !== null ? (new Date()).getFullYear() - birthYear : undefined
    const hrrZones = age ? countHRRzones(age) : 'Не могу рассчитать ваши пульсовые зоны, заполните данные своего профиля'

    const tempoZones = level !== null ? [
        secToMin(getTempo(level, 'recovery')),
        secToMin(getTempo(level, 'aerobic')),
        secToMin(getTempo(level, 'threshold')),
        secToMin(getTempo(level, 'interval')),
        secToMin(getTempo(level, 'repeat')),
    ] : 'Не могу рассчитать ваши зоны темпа, заполните данные профиля'

    const feelingsZones = [
        'Могу бежать с таким темпом вечно',
        'Комфортный темп, я не сдерживаю и не подгоняю себя',
        'Немного тяжело, могу так бежать примерно пол часа',
        'Тяжело, выдержу не более 10 минут',
        'Очень тяжело, смогу бежать максимум минуты 3'
    ]

    const messageText = 
    '<b>Ваши тренировочные зоны</b> \n' +
    '<b>Зона 1(восстановительная):</b> \n' +
    '- <i>Пульс:</i> ' +  '<b>до ' + hrrZones[0] + 'уд/мин</b>' + ';\n' +
    '- <i>Темп:</i> ' + '<b>до ' + tempoZones[0] + 'мин/км</b>' + ';\n' +
    '- <i>Ощущения:</i>' + '<b>' + feelingsZones[0] + '</b>,\n\n' +
    '<b>Зона 2(базовая):</b> \n' +
    '- <i>Пульс:</i> ' +  '<b>' + hrrZones[0] + '-' + hrrZones[1] + 'уд/мин</b>' + ';\n' +
    '- <i>Темп:</i> ' + '<b>' + tempoZones[0] + '-' + tempoZones[1] + 'мин/км</b>' + ';\n' +
    '- <i>Ощущения:</i>' + '<b>' + feelingsZones[1] + '</b>,\n\n' +
    '<b>Зона 3(темповая):</b> \n' +
    '- <i>Пульс:</i> ' +  '<b>' + hrrZones[1] + '-' + hrrZones[2] + 'уд/мин</b>' + ';\n' +
    '- <i>Темп:</i> ' + '<b>' + tempoZones[1] + '-' + tempoZones[2] + 'мин/км</b>' + ';\n' +
    '- <i>Ощущения:</i>' + '<b>' + feelingsZones[2] + '</b>,\n\n' +
    '<b>Зона 4(пороговая):</b> \n' +
    '- <i>Пульс:</i> ' +  '<b>' + hrrZones[2] + '-' + hrrZones[3] + 'уд/мин</b>' + ';\n' +
    '- <i>Темп:</i> ' + '<b>' + tempoZones[2] + '-' + tempoZones[3] + 'мин/км</b>' + ';\n' +
    '- <i>Ощущения:</i>' + '<b>' + feelingsZones[3] + '</b>,\n\n' +
    '<b>Зона 5(зона МПК):</b> \n' +
    '- <i>Пульс:</i> ' +  '<b>' + hrrZones[3] + '-' + hrrZones[4] + 'уд/мин</b>' + ';\n' +
    '- <i>Темп:</i> ' + '<b>' + tempoZones[3] + '-' + tempoZones[4] + 'мин/км</b>' + ';\n' +
    '- <i>Ощущения:</i>' + '<b>' + feelingsZones[4] + '</b>.\n\n' + 
    '/editprofile - коррекция данных для обновления тренировочных зон'

    return messageText;
    //bot.sendMessage(userId, messageText, {parse_mode: 'HTML'})
}