export const setState = (userData, state) => {
    const userState = state.find(user => user.id === userData.id)
    for (let prop in userData) {
        if (userData.hasOwnProperty(prop) && userState.hasOwnProperty(prop)) {
            userState[prop] = userData[prop];
        }
    }
    return state;
}