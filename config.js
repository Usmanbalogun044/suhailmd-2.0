const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="usmanbalogun044@gmail.com"
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


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044060102";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_29_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1qT1F0aE1RMExXeUpxMEQxVDlLbXN4OWtwelNiSTd1eEp6aVFUbWJLLzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFCaGR0elREUk5TSHU5RTVKeWpGSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDQ4OWI3NDEtOTYxYi00MDAyLTgyYzctZWFiZmQwNmU4ZjNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE0MyxcbiAgICAgIDk0LFxuICAgICAgMTg1LFxuICAgICAgMTAwLFxuICAgICAgNzIsXG4gICAgICAzNixcbiAgICAgIDIzNSxcbiAgICAgIDIyMyxcbiAgICAgIDc2LFxuICAgICAgODAsXG4gICAgICA4NCxcbiAgICAgIDIwNyxcbiAgICAgIDEyMyxcbiAgICAgIDI1MCxcbiAgICAgIDE5NyxcbiAgICAgIDE5MSxcbiAgICAgIDcyLFxuICAgICAgMTQxLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAyMTcsXG4gICAgICA0LFxuICAgICAgMjEsXG4gICAgICAzNSxcbiAgICAgIDc5LFxuICAgICAgMTA2LFxuICAgICAgMjIwLFxuICAgICAgNjMsXG4gICAgICAxMzAsXG4gICAgICAxMTksXG4gICAgICAxMSxcbiAgICAgIDEyLFxuICAgICAgMTI5LFxuICAgICAgMTc2LFxuICAgICAgODYsXG4gICAgICAyNixcbiAgICAgIDg1LFxuICAgICAgNDIsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS0gxdThHRU1Pdy9ib0dHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlk4VkpFcEtFMUFPZlZOdUIyMDdpbmw5NC9KeTVWenBvWS9sWk1zY2VDMjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjB3a3lKbjdFb2dnaGhqZG50aThIcVVCbk9wVzdvOFlnc1ZpV25FK011VUl2NDRXV01vaFUrVUJiNm4xM1JEM1JBYWJtZWMxQjVYU3dQcTJGMDhnQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiejJ3VEt2SGt5L0FFMmlFdE5qN2gvZ0MyeHFxTzNuMTFBODNaZzZqa3dRa05CdURxVkorV0lqUURiNklEUlNUSERJZDJrUTFZWVFwa2JsVUVtN05haFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ0MDYwMTAyOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRE9MTEFSSFVOVEVSPERFVj5cIixcbiAgICBcImxpZFwiOiBcIjIxMTM4NTUzOTY3NDM2MDo4NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDQwNjAxMDI6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzMDE3Njlcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "dollarhunter-bot",
  ownername:process.env.OWNER_NAME|| "dollarhunter",


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
