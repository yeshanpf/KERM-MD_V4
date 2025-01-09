/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/













const { cmd, commands } = require("../command");

cmd({
  pattern: "vv",
  alias: ["vo", "viewonce"],
  react: "✨",
  desc: "Read ViewOnce messages",
  category: "download",
  filename: __filename,
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply,
}) => {
  try {
    // Check if the quoted message exists and is a ViewOnce message
    const viewOnceMessage = quoted?.msg?.contextInfo?.quotedMessage?.viewOnceMessageV2;
    if (!viewOnceMessage) {
      return reply("❌ Please reply to a ViewOnce message.");
    }

    // Handle ViewOnce image messages
    if (viewOnceMessage.message?.imageMessage) {
      console.log("Processing a ViewOnce image.");
      const caption = viewOnceMessage.message.imageMessage.caption || "No caption.";
      const mediaPath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.imageMessage);
      return conn.sendMessage(from, {
        image: { url: mediaPath },
        caption: caption,
      });
    }

    // Handle ViewOnce video messages
    if (viewOnceMessage.message?.videoMessage) {
      console.log("Processing a ViewOnce video.");
      const caption = viewOnceMessage.message.videoMessage.caption || "No caption.";
      const mediaPath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.videoMessage);
      return conn.sendMessage(from, {
        video: { url: mediaPath },
        caption: caption,
      });
    }

    // If it's not an image or video, return an error
    return reply("❌ Unsupported ViewOnce message type.");
  } catch (error) {
    console.error("Error processing ViewOnce message:", error);
    return reply("❌ An error occurred while processing the ViewOnce message.");
  }
});