























const { cmd } = require('../command');
const axios = require('axios');



cmd({
  pattern: "tgs",
  alias: ["animatedsticker"],
  desc: "Search and fetch animated stickers (TGS) from Telegram",
  category: "downloader",
  react: "🎨",
  filename: __filename
}, async (_0x19564c, _0x1d2bb7) => {
  try {
    // Check if a search query is provided
    if (!_0x1d2bb7) {
      return await _0x19564c.reply("*_Please provide a name or keyword to search for stickers. Example: .tgs cats_*");
    }

    // Use Telegram API to search for stickers
    const query = _0x1d2bb7;
    const telegramStickerAPI = `https://t.me/addstickers/${encodeURIComponent(query)}`;
    const response = await axios.get(telegramStickerAPI);

    // Check if the sticker pack exists
    if (response.status === 404) {
      return await _0x19564c.reply("❌ *No sticker pack found for this keyword.*");
    }

    // Prepare the response with the sticker pack link
    const message = `✨ *Stickers found for "${query}"* ✨\n\n🔗 [Click here to view the sticker pack](https://t.me/addstickers/${encodeURIComponent(query)})`;

    await _0x19564c.reply(message);

  } catch (error) {
    console.error("Error during tgs command:", error);
    await _0x19564c.reply("❌ *An error occurred while searching for stickers.*");
  }
})