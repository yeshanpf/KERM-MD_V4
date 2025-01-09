















const { cmd } = require('../command');

cmd({
    pattern: "save",
    react: "⏳",
    desc: "Download and directly send media back to the user",
    category: "utility",
    use: ".save (reply to media)",
    filename: __filename
}, async (conn, mek, m, { quoted, react, sender, reply }) => {
    try {
        // Vérifie si le message cité contient des médias
        if (!quoted || !quoted.message || !(quoted.message.imageMessage || quoted.message.videoMessage || quoted.message.audioMessage || quoted.message.documentMessage)) {
            return await reply("❌ Please reply to a valid media message.");
        }

        // Réagit avec un sablier pour indiquer que l'opération est en cours
        await react("⏳");

        // Télécharge le média
        const mediaBuffer = await conn.downloadMediaMessage(quoted);

        if (!mediaBuffer) {
            return await reply("❌ Failed to download the media.");
        }

        // Détecte le type de média
        const mediaType = quoted.message.imageMessage
            ? "image"
            : quoted.message.videoMessage
            ? "video"
            : quoted.message.audioMessage
            ? "audio"
            : quoted.message.documentMessage
            ? "document"
            : null;

        if (!mediaType) {
            return await reply("❌ Unsupported media type.");
        }

        // Envoie directement le média dans la discussion privée de l'utilisateur
        await conn.sendMessage(sender, {
            [mediaType]: mediaBuffer,
            caption: `Here is your ${mediaType}.`
        });

        // Réagit avec ✅ pour indiquer que l'opération est terminée
        await react("✅");
    } catch (e) {
        console.error("Error in save command:", e);
        await reply("❌ An error occurred while processing your request.");
    }
});