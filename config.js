const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hjQkFJTm5tSlpyUU1jbUVudE1wVnZmVFcxcHBUL1hvTjd1VmRoWjFXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3AyL21Bcm5EeHVsZi92K3czTVY2aUVldVhQNS9yNVJsY3g1Mk8rSVcxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSWNNN3NQemNoeFJ5b0J3YTBFSzVseGZQWlBnd2Fla2U2ZEszWFhwc200PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvbzgwYnUxa2puZ2JiRG42eUkvSEJEZ25uTWlyRXpwZ2RhdnNkL3dENkhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPdndzMkFxNTcrdVFOS0RtRXJERGk4Uk5iZW1UTUNCb1ZGY0w2cTJoVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNrMjdrL0FhZjUxZktwcDgyTjRTb1A3THlTanBJR3RWNTN0WWZ4M3RSblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU085MUxjTUdDc2dmdEJEK0ZIMDIrQWErNXZRQ1FzNjlqbGFCUW1vZmxsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWExiSWx4L3dtK2FmSHNjZi9EWmhXSjRXUFVJT0dkV1U2VjFtQ2JDblNYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRLTmwyNUVKdmFVSjVPdU5SR3FGYUtNSVVHVDFmczBodFpLNVBHQjhrOWNvMTNUOHJIL3oyNDhHOUJhS1N2YkhpY3ExNTFFQnM4V05qWjhBWmphTUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IjRKN3U2a1oyWE9xRnkwRFJvRUtkMUJGZWkyeHFhSzRHT0JRdFZyak1wK2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNzAxNjE3MjU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NDMzMjM3QTA3OThDMjMzNjE2Q0M3QjgxNUUxOTdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE4ODEyMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzcwMTYxNzI1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUIxMTIzQjQ1RTdGODYwM0Q5MkE5MDgzRjVDQzFGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxODgxMjE3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBWlY5S045USIsIm1lIjp7ImlkIjoiOTIzNzAxNjE3MjU4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zj8yk8J2Zneqvrdi5IPCThqnLkM2iz7vMiMyQ8J2QgOG3jfCdkI3guY/MmvCThqnjgIbNjiDwkom98JKJvSAg8JKJvSAg8JKJvSAg8JKJvSAgIPCSib0gIPCSib0gIPCThqnEq9af4Y2dzZzEq8aezL3qrZjhs7jJqsy98J2Qg8mbzaLMvcm8IiwibGlkIjoiMTk0NDk4MjMxNTMzNjI3OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbTl2WVFFRVByWWtNZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyQ2pOVCszU3d5TEcrVXJGUUNkM3R5dEdlc0tpN2RteFJpQXhCUHpYUVJzPSIsImFjY291bnRTaWduYXR1cmUiOiJkbW1WeGJEaXREcjJ3R0VETTRyM2JoeW9MdTEzQnR1SXg4dm05b001a1JCVkZvbWZlUnpaZDg4VzNyYWNzbTBpL0F2a3Nrbm5rZjFMbmQ3amkrbWhCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVTNia2hWUzlueG5jTW1uOFk3dGJ1OHdWRHoxbzJqZ2lTaU5DYytFajE2d2prWmdKRE1ycWhRL1pJVTQ1R2tjdmlBUlE5UmZKSVNVUFJDVzFBKzNOQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM3MDE2MTcyNTg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZ296VS90MHNNaXh2bEt4VUFuZDdjclJuckNvdTNac1VZZ01RVDgxMEViIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE4ODEyMTQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWM3In0=nbmF0dXJlS2V5IjoiYjlPR0pYaFBwTUZ2VXNnOXZOaEZzcDAxY1k1SXMwc0tEbkEwMm5QeTdXWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWW12UVp6UXNRamVURTR1UlV5NExiS2tjek0xblN1a2sxVEwrVzc2eFUybkU3U3FWYk9QaVhXMkJWRE5NVUh3cXVBbnVpenZId21wZDQvYUsraThIRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJVUmtWTlRtZk4xazJCYUNLK3pNUkhpVE1UL1JhOU0vVmUvbVh6OVplbmNtTDlaNkNUR2lCK1VhV0wzYmt6VDFJckoxWFA3aThkMlM4cm9Wem55c0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk4NTI5MTEyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTc1NzU1OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFONVIifQ====", 
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Ayan 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303788282",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑 𝐒𝐇𝐀𝐁𝐀𝐍",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923303788282",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
