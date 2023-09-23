export const getUserState = (chatId, state) => {
    const userState = state.find(user => user.id === chatId);
    return userState;
} 