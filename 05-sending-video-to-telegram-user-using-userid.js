/*
This code will send a "video" to the provided "chatId".
*/

import 'dotenv/config'; // Importing ".env" data.
import TelegramBot from 'node-telegram-bot-api'; // Importing "node-telegram-bot-api" as "TelegramBot".
import path from 'path'; // Importing path module as "path" (This will be used to convert the local path into the absolute path).

// Replace 'YOUR_API_TOKEN' with the API token from BotFather
const token = process.env.BOT_TOKEN; // YOUR_API_TOKEN (Accessing the token from the environment variables.)
const bot = new TelegramBot(token, { polling: true }); // Creating a new instance of the TelegramBot class and passing the token (the bot's API token) as an argument to the constructor.

// Define the user ID of the recipient
const userId = process.env.USER_CHAT_ID; // USER_CHAT_ID (Accessing the user ID from the environment variables.)

const videoPath = path.resolve('./Videos/video.mp4'); // Resolving the absolute path of the video file.

function sendVideo() {
  bot.sendVideo(userId, videoPath) // Sending "video" to the "userId".
    .then((response) => {
      console.log('Video sent successfully:', response); // Printing message ('Video sent successfully:') and "response" in the terminal, if the video is sent successfully.
    })
    .catch((error) => {
      console.error('Error sending video:', error); // Printing error message ('Error sending video:') and "error" occurred in the terminal.
    });
}

sendVideo(); // function to send video.
