/*
This code will send an "image" to the provided "chatId".
*/

import 'dotenv/config'; // Importing ".env" data.
import TelegramBot from 'node-telegram-bot-api'; // Importing "node-telegram-bot-api" as "TelegramBot".
import path from 'path'; // Importing path module as "path" (This will be used to convert the local path into the absolute path).

// Replace 'YOUR_API_TOKEN' with the API token from BotFather
const token = process.env.BOT_TOKEN; // YOUR_API_TOKEN (Accessing the token from the environment variables.)
const bot = new TelegramBot(token); // Creating a new instance of the TelegramBot class and passing the token (the bot's API token) as an argument to the constructor.

// Define the user ID of the recipient
const userId = process.env.USER_CHAT_ID; // USER_CHAT_ID (Accessing the user ID from the environment variables.)

// Path to the local image you want to send
const imagePath = path.resolve('./Images/cat.jpeg'); // Replace with the local image path.

// Send the "image" to the specific user
bot.sendPhoto(userId, imagePath) // Sending "image" to the "userId".
  .then((response) => {
    console.log('Image sent successfully:', response); // Printing message ('Image sent successfully:') and "response" in the terminal, if the image is sent successfully.
  })
  .catch((error) => {
    console.error('Error sending image:', error); // Printing error message ('Error sending image:') and "error" occurred in the terminal.
  });
