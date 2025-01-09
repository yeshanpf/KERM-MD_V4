const { cmd } = require("../command");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

cmd({
  pattern: "git",
  desc: "Download and send a zip file of a GitHub repository.",
  category: "utilities",
  react: "🔗",
  filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
  try {
    // Extract the GitHub repo link from the command
    let repoUrl = m.text.split(" ")[1];
    
    // Check if the user provided a URL
    if (!repoUrl) {
      return reply("⚠️ *Please provide a GitHub repository URL. Example: .git https://github.com/user/repo*");
    }

    // Check if the URL is a valid GitHub repository
    const gitHubPattern = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
    const match = repoUrl.match(gitHubPattern);

    if (!match) {
      return reply("⚠️ *The provided URL doesn't seem to be a valid GitHub repository.*");
    }

    // Build the URL to download the zip file of the repository
    const zipDownloadUrl = `https://github.com/${match[1]}/${match[2]}/archive/refs/heads/main.zip`;

    // Log the URL for debugging purposes
    console.log(`Attempting to download from: ${zipDownloadUrl}`);

    // Download the zip file
    const response = await axios.get(zipDownloadUrl, { responseType: 'arraybuffer' });

    // Check if the response is successful (HTTP status 200)
    if (response.status !== 200) {
      throw new Error(`Failed to download, HTTP status: ${response.status}`);
    }

    // Create a temporary file to store the zip
    const tempFilePath = path.join(__dirname, "temp.zip");
    fs.writeFileSync(tempFilePath, response.data);

    // Message indicating the file is being downloaded
    await reply(`Your zip file of the ${match[2]} repository is still downloading for a moment...`);

    // Wait 3 seconds before sending the file
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Send the zip file as a message
    await conn.sendMessage(m.chat, { 
      document: fs.createReadStream(tempFilePath), 
      fileName: `${match[2]}.zip`, 
      mimetype: 'application/zip',
      caption: `Here is the zip file of the GitHub repository: ${repoUrl}\n> BY 💋KERM_MD-V4💋`
    });

    // Delete the temporary file after sending
    fs.unlinkSync(tempFilePath);

  } catch (error) {
    console.error("Error with the .git command: ", error.message);
    reply(`❌ *An error occurred while downloading the repository.*\nDetails: ${error.message}`);
  }
});