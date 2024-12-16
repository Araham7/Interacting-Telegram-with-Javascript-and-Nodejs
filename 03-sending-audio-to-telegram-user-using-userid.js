/*
This code will send an "audio-file" to the provided "chatId" .
*/

import 'dotenv/config'; // Importing ".env" data.
import TelegramBot from 'node-telegram-bot-api'; // importing "node-telegram-bot-api" as "TelegramBot".

// Replace with your bot token
const token = process.env.BOT_TOKEN; // YOUR_API_TOKEN
const bot = new TelegramBot(token, { polling: true });  // creating a new instance of the TelegramBot class, and passing the token (the bot's API token) as an argument to the constructor.

// Replace with the chat ID of the user/group/channel
const chatId = process.env.USER_CHAT_ID; // USER_CHAT_ID

// Replace with the file path or URL of the audio file
const audioPath = './Audio/audio.ogg'; // Replace with the local audio path.

// Send the "audio" to the specific user
bot.sendAudio(chatId, audioPath, {
  caption: 'Here is your audio!', // Optional caption
  performer: 'Artist Name',      // Optional artist name
  title: 'Track Title',          // Optional track title
})
  .then(response => {
    console.log('Audio sent successfully:', response); // printing message('Audio sent successfully:') and "response" in terminal , if "audio" send successfully.
  })
  .catch(err => {
    console.error('Error sending audio:', err); // printing error-message('Error sending audio:') and "error" occured in the terminal.
  });
