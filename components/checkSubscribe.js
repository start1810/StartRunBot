const channelId = '-1001619988820'

export const checkSubscribeMsg = async (bot, msg) => {
    const subscribe = await bot.getChatMember(channelId, msg.from.id);
    //console.log(subscribe)
    return subscribe;
}

export const checkSubscribeCtx = async (bot, msg) => {
    const subscribe = await bot.getChatMember(channelId, msg.chat.id);
    return subscribe;
}