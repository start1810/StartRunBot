import TelegramBot from "node-telegram-bot-api";
import { commands } from "./components/botCommands.js";
import { sendStartMessage } from "./components/sendStartMessage.js";
import { checkSubscribeMsg, checkSubscribeCtx } from "./components/checkSubscribe.js";
import { sendSubscribeMessage } from "./components/sendSubscribeMessage.js";
import { createProfile, editProfile } from "./components/createProfile.js";
import { editBirth, editBirthMessage } from "./components/editBirth.js";
import { setState } from "./setState.js";
//import { getUserState } from "./getUserState.js";
//import { editBirthMessage } from "./components/editBirthMessage.js";
import { editLevel, checkResult, editLevelMessage } from "./components/editlevel.js";
//import { checkResult } from "./components/checkResult.js";
//import { editLevelMessage } from "./components/editLevelMessage.js";
import { createWorkoutPlanMenu } from "./components/createWorkoutPlanMenu.js";
import { editStartDate } from "./components/editStartDate2.js";
import { chooseDayStart } from "./components/chooseDayStart.js";
import { editTimeZone } from "./components/editTimeZone.js";
import { saveTimeZone } from "./components/saveTimeZone.js";
import { workoutNotices } from "./components/workoutNotices.js";
import { getWeekPlan } from "./components/getWeekPlan.js";
import { workoutPlan5km } from "./workoutPlanCreator/5kmFirstLevel.js";
import { viewWeekPlan } from "./components/viewWeekPlan.js";
import { getZones } from "./workoutPlanCreator/getZones.js";
import { botToken } from "./botToken.js";
import { adminData } from "./components/adminPannel.js";


const token = botToken;

const bot = new TelegramBot(token, {
    polling: {
        interval: 500,
        autoStart: true
    }
});

const botAdmins = [400233058]

export const App = async (state) => {
    console.log('bot is work')
    bot.setMyCommands(commands)
    bot.on("polling_error", err => console.log(err.data.error.message))
    await workoutNotices(bot);
    bot.on("message", async msg => {

        //console.log(state);
        //console.log(msg);
        const chatId = msg.chat.id;
        const text = msg.text;
        let userState = state.find((user => user.id === chatId));
        
        if (!userState) {
            const user = { id: chatId, place: 'textState' }
            state.push(user)
            userState = { id: chatId, place: 'textState'}
        };

        try {
            if(text.startsWith('/start')) {
                await sendStartMessage(bot, msg)
            } else {
                const subscribe = await checkSubscribeMsg(bot, msg);
                //console.log(subscribe)
                if (subscribe.status === 'left' || subscribe.status === 'kicked') {
                    await sendSubscribeMessage(bot, msg);
                } else {
                    if (text === '/editprofile') {
                        setState({ id: chatId, place: 'editprofile' }, state);
                        await editProfile(bot, msg);
                    }
                    if (text === '/myzones') {
                        const zonesMessageText = await getZones(msg);
                        bot.sendMessage(chatId, zonesMessageText, {parse_mode: "HTML"})
                    }
                    if (text === '/weekplan') {
                        const weekPlan = await getWeekPlan(chatId, workoutPlan5km);
                        viewWeekPlan(bot, msg, weekPlan);
                    }

                    if ((text === '/admin') && (botAdmins.includes(chatId))) {
                        const data = await adminData();
                        console.log(data)
                        await bot.sendMessage(chatId, data);
                    }

                    if (userState.place === 'editbirth') {
                        await editBirthMessage(bot, msg);
                        setState({ id: chatId, place: 'textState' }, state);
                    } else if ( userState.place === 'editlevel') {
                        await editLevelMessage(bot, msg);
                        setState({ id: chatId, place: 'textState' }, state);
                    } else if (userState.place === '1500m' || userState.place === '3000m' || userState.place === '5000m') {
                        const distance = userState.place
                        await editLevelMessage(bot, msg, distance);
                        setState({ id: chatId, place: 'textState' }, state);
                    } 
                }
            }
        }
        catch(error) {
            console.log(error)
            const errorText = 'Упс, что-то пошло не так! Можете перезапустить бота или написать @striganovartem'
            bot.sendMessage(chatId, errorText)
            console.log('ошибка')
        }
    })
    bot.on("callback_query", async ctx => {
        //console.log(ctx);
        //console.log(state);
        const chatId = ctx.message.chat.id;
        const msg = ctx.message;
        const userState = state.find((user => user.id === chatId));
        if (!userState) {
            const user = { id: chatId, place: 'textState' }
            state.push(user)
        };

        try {
            const subscribe = await checkSubscribeCtx(bot, msg);
            //console.log(subscribe)
            //console.log(msg)
            if (subscribe.status === 'left' || subscribe.status === 'kicked') {
                await sendSubscribeMessage(bot, msg);
            } else {
                //console.log(ctx.data)
                if ((ctx.data).startsWith('/editstartdate')) {
                    await editStartDate(bot, ctx)
                }
                if ((ctx.data).startsWith('/startday')) {
                    await chooseDayStart(bot, ctx);
                }
                if ((ctx.data).startsWith('/edittimezone')) {
                    await editTimeZone(bot, ctx);
                }
                if ((ctx.data).startsWith('/savetimezone')) {
                    await saveTimeZone(bot, ctx);
                }
                
                switch (ctx.data)  {
                    case '/createprofile':
                        setState({ id: chatId, place: 'editprofile' }, state);
                        await createProfile(bot, msg);
                        break
                    case '/editbirth':
                        setState({ id: chatId, place: 'editbirth' }, state);
                        await editBirth(bot, msg);
                        break
                    case '/editlevel':
                        setState({id:chatId, place: 'editlevel'}, state);
                        editLevel(bot, msg);
                        break
                    case '5000m': 
                    case '3000m': 
                    case '1500m':
                        setState({id:chatId, place: ctx.data}, state);
                        //console.log('distance')
                        //console.log(state)
                        checkResult(bot, msg);
                            break 
                    case '/createWorkoutPlan':
                        setState({ id: chatId, place: 'editworkoutplan' }, state);
                        await createWorkoutPlanMenu(bot, msg);
                        break
                    case '/weeksforworkouts':
                        break
                    
                }  
            }
        }
        catch(error) {
            console.log(error)
        }
            
    })
}