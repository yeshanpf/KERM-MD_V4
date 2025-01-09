/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/

function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
const fetch = require('node-fetch');
cmd({
  'pattern': "gitclone",
  'alias': ["git"],
  'desc': "Download GitHub repository as a zip file.",
  'react': '📦',
  'category': "downloader",
  'filename': __filename
}, async (_0x49ffeb, _0x5cee91, _0x319d74, {
  from: _0x7d39c8,
  quoted: _0x2ffc7b,
  args: _0x30dbe6,
  reply: _0x39beb1
}) => {
  if (!_0x30dbe6[0x0]) {
    return _0x39beb1("Where is the GitHub link?\n\nExample:\n.gitclone https://github.com/Kgtech-cmr/KERM-MD_V4");
  }
  if (!/^(https:\/\/)?github\.com\/.+/.test(_0x30dbe6[0x0])) {
    return _0x39beb1("⚠️ Invalid GitHub link.");
  }
  try {
    let _0x860bec = /github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?/i;
    let [_0x41dc06, _0x4d66a1, _0x782acb] = _0x30dbe6[0x0].match(_0x860bec) || [];
    if (!_0x4d66a1 || !_0x782acb) {
      throw new Error("Invalid GitHub URL.");
    }
    let _0xbc5f52 = 'https://api.github.com/repos/' + _0x4d66a1 + '/' + _0x782acb + '/zipball';
    let _0x1e0964 = await fetch(_0xbc5f52, {
      'method': "HEAD"
    });
    if (!_0x1e0964.ok) {
      throw new Error("Repository not found.");
    }
    let _0x14b4bb = _0x1e0964.headers.get("content-disposition");
    let _0x17b642 = _0x14b4bb ? _0x14b4bb.match(/filename=(.*)/)[0x1] : _0x782acb + ".zip";
    _0x39beb1("*📥 DOWNLOADING REPOSITORY...*\n\n*REPOSITORY:* " + _0x4d66a1 + '/' + _0x782acb + "\n*FILENAME:* " + _0x17b642 + "\n\n> *©️ Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ SᴜʙZᴇʀᴏ*");
    await _0x49ffeb.sendMessage(_0x7d39c8, {
      'document': {
        'url': _0xbc5f52
      },
      'fileName': _0x17b642 + '.zip',
      'mimetype': "application/zip",
      'contextInfo': {
        'mentionedJid': [_0x5cee91.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️ sᴜʙᴢᴇʀᴏ ᴍᴅ ❄️",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5cee91
    });
  } catch (_0x26158d) {
    console.error(_0x26158d);
    _0x39beb1("❌ Failed to download the repository. Please try again later.");
  }
});