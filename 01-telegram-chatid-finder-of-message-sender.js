/*
This code will give you the "chatId" of the message send by the user.
*/

import 'dotenv/config'; // Importing ".env" data.
import TelegramBot from 'node-telegram-bot-api'; //  importing "node-telegram-bot-api" as "TelegramBot".

const token = process.env.BOT_TOKEN; // YOUR_API_TOKEN
const bot = new TelegramBot(token, { polling: true }); // creating a new instance of the TelegramBot class, and passing the token (the bot's API token) as an argument to the constructor.

// Listen for any message and log the details
bot.on('message', (msg) => {
  const chatId = msg.chat.id; // Extracting "chat_ID" of the "message_sender".
  const messageText = msg.text; // Extracting "messageText" send by the "message_sender".
  
  console.log(`Message received: ${messageText}`); // This will log(print) the "messageText" into the terminal.
  console.log(`From Chat ID: ${chatId}`); // This will log(print) the "chatId" into the terminal.
});
