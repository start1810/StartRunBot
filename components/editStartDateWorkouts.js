export const editStartDateWorkout = async (bot, msg) => {
    const markup = {
        inline_keyboard: [
            [{text: '^', callback_data: '/dayup'}, {text: '^', callback_data: '/monthup'}],
            [{text: day, callback_data: '/day'}, {text: month, callback_data: '/month'}],
            [{text: 'v', callback_data: '/daydown'}, {text: 'v', callback_data: '/monthdown'}],

        ]}
}