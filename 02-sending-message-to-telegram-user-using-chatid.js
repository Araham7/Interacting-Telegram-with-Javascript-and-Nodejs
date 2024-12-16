/*
This code will send "your-message" to the provided "chatId" .
*/

import 'dotenv/config'; // Importing ".env" data.
import TelegramBot from 'node-telegram-bot-api'; // importing "node-telegram-bot-api" as "TelegramBot".


const token = process.env.BOT_TOKEN; // YOUR_API_TOKEN
const bot = new TelegramBot(token); // creating a new instance of the TelegramBot class, and passing the token (the bot's API token) as an argument to the constructor.

// Define the user ID of the recipient
const userId = process.env.USER_CHAT_ID; // USER_CHAT_ID

const messagTosend = "Hello, this is a message sent to you!"; //

// Create an async function to send the message
const sendMessageToUser = async () => {
  try {
    const response = await bot.sendMessage(userId, messagTosend); // This will send the "messagTosend" to the provided "userId"
    console.log('Message sent successfully:', response); // This will print the message('Message sent successfully:') and give the response.
  } catch (error) {
    console.error('Error sending message:', error); // If error occured during sending message it will print('Error sending message:') and also print the "error" that occured.
  }
};

// Call the function to send the message.
sendMessageToUser();
