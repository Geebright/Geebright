const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "2347080726676" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_22_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjaW0vNUNQMkdNS0Ztb2N3bVVOYkJaWlFLaENKZFlqM0RGOEpNWXdURUlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPeVh2dlducVRaS2ZldG5vbWs2MjJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmZTJhYTcyLTFiNTMtNDZlNS05Nzc5LTQyZDAwYmExOWJmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA3MyxcbiAgICAgIDIwLFxuICAgICAgNDEsXG4gICAgICAxMDYsXG4gICAgICAyMjksXG4gICAgICAxOTgsXG4gICAgICAxNSxcbiAgICAgIDc2LFxuICAgICAgNTMsXG4gICAgICA4NixcbiAgICAgIDExMixcbiAgICAgIDI0OCxcbiAgICAgIDE3MixcbiAgICAgIDIzMCxcbiAgICAgIDM3LFxuICAgICAgMjMzLFxuICAgICAgODksXG4gICAgICAyMTMsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxMTQsXG4gICAgICAyMTgsXG4gICAgICAxNDYsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDQsXG4gICAgICA1NyxcbiAgICAgIDE5LFxuICAgICAgMTE3LFxuICAgICAgMzAsXG4gICAgICA0NCxcbiAgICAgIDEsXG4gICAgICAxMjUsXG4gICAgICAxNTgsXG4gICAgICA4NSxcbiAgICAgIDE4OCxcbiAgICAgIDE2MixcbiAgICAgIDE5NixcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUEs5Rk1ZWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MDcyNjY3Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjM3NTQ5NDg0ODY0OTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzVjRZY0hFTCtMb0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0pBUWVLWmwvcWtwZlpybWZVTEtDZTQwZk5KeS9zNGZhcTZRaUpxVEZDUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFS3c2dFZ2ampMVzlXc3dlOXlQOEEzb3ZRUXh5ZUQxWCtZcEdxMG9tMWV5TXh2SWdUSUtFVk9jcUw4eTdWbTM5VTZnR2dMSi9rL0VONnFwWk9ZM2dCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJocUJOMEx0cGIvN0lmSUk5V0FVMkVZcFJyVjMvRXhaRkoyWnpJRzE1UytwWjVSeTFHQjdFUGlsbGxEZjZhTlBGcldjck1BdDR1VmxZRW9kZHdkREREZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgwNzI2Njc2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY3NjE2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GeeAI",
  ownername:processprocess.env.BOT_NAME || "Geebright",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
