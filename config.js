const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22893697557";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_19_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm43eXBGTm1SeEJkVzNjV1M4MDdlZ3RKMzdIbmRJV1JGUlArVGZaV2ZxaWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm0xTjV3cE1rVE95Z3VKdjFNc19LSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQ2ZDg2ZTMtMDQ3NS00Mzc5LTljZTktYTNmOWQ5ZDAwNWJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDIwMSxcbiAgICAgIDE5MSxcbiAgICAgIDIwMCxcbiAgICAgIDEyNyxcbiAgICAgIDcxLFxuICAgICAgMjAwLFxuICAgICAgMixcbiAgICAgIDIxOSxcbiAgICAgIDE3NCxcbiAgICAgIDE2OCxcbiAgICAgIDE5MyxcbiAgICAgIDUyLFxuICAgICAgMjE0LFxuICAgICAgMTgsXG4gICAgICAxOTEsXG4gICAgICAxNzIsXG4gICAgICAxNDcsXG4gICAgICAxMyxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDE0NyxcbiAgICAgIDQ3LFxuICAgICAgMTc3LFxuICAgICAgODcsXG4gICAgICAxNTgsXG4gICAgICAxMTksXG4gICAgICAxODIsXG4gICAgICAyMzgsXG4gICAgICAyMSxcbiAgICAgIDE3MCxcbiAgICAgIDE3NSxcbiAgICAgIDIzNSxcbiAgICAgIDQ4LFxuICAgICAgMjM3LFxuICAgICAgMTc5LFxuICAgICAgMTYzLFxuICAgICAgMTQ2LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpSUVMxTkNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjg5MzY5NzU1Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl5QgIFxcbvCdl6ggIFxcbvCdl5ogIFxcbvCdl6ggIFxcbvCdl6YgIFxcbvCdl6cgIFxcblxcbvCdl6AgIFxcbvCdl5QgIFxcbvCdl6EgIFxcbvCdl6xcIixcbiAgICBcImxpZFwiOiBcIjE2OTI3MzgyMTUyMDAyMjo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcUl1NUVGRUxHZ3FNQUdHQ29nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZHY3FQdi90Sm1kT0xrMXF2TUtmYWJWMmZNaWtLRk4vK01ndnZ6VHlSVG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVFvckowS0laSkZFMWhQZmtBV2ZoZTJzaXVvVlkzblRyVGpOQk0va1lLamFzR0hOSjBidXFjanpTUzJZVEt3a2FLNWMyamRyTEJGdWViVWNYalR0Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVHR3Skp3VzBpdUdMQ1REYjVSNkJDdVBMaDhzS043ZEc0UEg1SEl3OW1rY1dNNG9SMGw1SThpVEk3WDJPR1lQVjIyZHA1MDdBR0diaUFtMktXejZqRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTM2OTc1NTc6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0ODk5NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOandcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5qdy5qc29uIjogIntcImtleURhdGFcIjpcIlZVTDRQZGxqRkJSeVRIbjB5RDJRais2UFYwSGdVT2NOTVdONnRMbXpzZms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3ODc5NjU1NCxcImN1cnJlbnRJbmRleFwiOjIyLFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwLDEsMTNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
