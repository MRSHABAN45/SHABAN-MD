const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZRZGJaRVR1QldDbmZlK2EzeCt5Z0MyV0RtS2JObG5XVkthU29LclBrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEpYeEFoOHFkU3ZvU3FpUUZlZklWME5qSjllWVBtV1VTcVFrNzlQTGt6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RUx1L1R2VFB4MityRGRKYzZsQlJpY3RiV1p3bktGVXRRK01kNlU5cFdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISmlXbnZaLzZlZ3dYWVg2MVA5czQzZi9ZbE55ajRmcU9BRUVZZmNrVHhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitINlRuWFdERC96a3lMWnlQUk51T1VPNDFEaHpXYUFTb1oybTRUYTJnWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5pMVArbE5YM200ZFhSdUlHT05VWUhudjFXWjlCRnZYeDFXeXRrS0VkbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU55dlJvZTZUL2pnTDkxQzNpdHd4MEtER2RwVWlIM2xtUTAxUC8xb1VXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTdXRG5YR0h4VXJxOHpUMHN2K084TlJwazhtaXVBQ0YrdmtNelJiWU9EVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhpanZhWEJHMXZIR1U4bVBpTVdLY0FFZUpyTEdBbTFwbjBEWDdyWEswcENQdkE4VEIyOWF5VVR0OEI3cHNvT0VKTzFSRVFxcGpXYUp6cHpGc0lqYmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJZdzFadWpremk4aEpuL29VQTZKc0lkRHluWjlhZnIzWisrNXRGNDQwLzJ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc0MDE2MjgyN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzA3ODdGOUVENzYyM0Y1NzM0QTI5QzU3MEI3QzVCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0MzY1MDQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3NDAxNjI4MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1ODQ4NUZBNTU3OEMzRDU5NjQwRjBGMzE0QUM4MzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDM2NTA0NX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJUMkJJWUxZSyIsIm1lIjp7ImlkIjoiMjU2NzQwMTYyODI3OjUzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE2MjY0OTkxNTcyMDE5OjUzQGxpZCIsIm5hbWUiOiJEYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l6WnQ4b0JFT21scU1rR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZIeThaUFhKdXVYandFbm5FS0c2NzQ0Z3QwcWdTRkhLT1huTU0zTlp3blU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhaMEMxNTgrM2dsZ25JVGY0QURBL0tKWGVWNXRJZm5EUnZSR2NpUGJIcVU0dWEyVlYvRWRYZmRuVXZXaDZCNUx0OE9hNC9wVDluVDdnUzFOdVV3WUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaSVNrdTJ0ZGhOVStGeUhWWHFKWm1EVWpzblNoNTEvd3VYak1iTUJoVWxoL1U2czRQN2c2MGIwQVZrZFlhdEhlMnZ1NVhXQng5ZzV1cThCSGVMWUtpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc0MDE2MjgyNzo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlaDh2R1QxeWJybDQ4Qko1eENodXUrT0lMZEtvRWhSeWpsNXpETnpXY0oxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjQzNjUwMzcsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVQrIn0="
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Dan-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "Dan Pro V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Dan",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,⭐,🫶,🌸,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "256740162827",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-Dan",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
