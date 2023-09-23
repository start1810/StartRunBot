import TelegramBot from "node-telegram-bot-api";

const token = '6188444985:AAFtpsbmhdcVY_MmbbRCZT7bEk5OJJnF4ac';

export const bot = new TelegramBot(token, {
    polling: {
        interval: 2000,
        autoStart: true
    }
});