import TelegramBot from "node-telegram-bot-api";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

// .env
const API_KEY = process.env.API_KEY;
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

/* Weather Api */
const url = `https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${API_KEY}`;
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  var selsi = Math.floor(data.main.temp - 273).toString();
  bot.on("text", (msg) => {
    chatId = msg.chat.id;
    bot.sendMessage(chatId, `Temperatur  ${selsi}°C`);
  });
};
getData();
