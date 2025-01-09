















const { cmd: _0x1a2b3c, commands: _0x4b5d6e } = require('../command'); const _0x7f8a90 = require("yt-search"); const _0x6c3d4b = require("axios"); _0x1a2b3c({ 'pattern': "video4", 'alias': ["ytvid4", "ytv4", 'ytvideo4'], 'react': '🔃', 'desc': "Download videos from YouTube by searching for keywords.", 'category': "video", 'use': ".vidx <keywords>", 'filename': __filename }, async (_0x123abc, _0x456def, _0x789ghi, { from: _0xabc123, args: _0xdef456, reply: _0xghi789 }) => { try { const _0x8b9c7d = _0xdef456.join(" "); if (!_0x8b9c7d) return _0xghi789("*Please provide a video title or URL*"); _0xghi789("*_Downloading your song please wait..._*"); const _0xa1b2c3 = await _0x7f8a90(_0x8b9c7d); if (!_0xa1b2c3.videos || _0xa1b2c3.videos.length === 0x0) return _0xghi789("❌ No results found for \"" + _0x8b9c7d + "\"."); const _0x4d5e6f = _0xa1b2c3.videos[0x0]; const _0x7c8d9e = _0x4d5e6f.url; const _0x123d4e = "https://deliriussapi-oficial.vercel.app/download/ytmp3?url=" + _0x7c8d9e; const _0x6e7f8a = await _0x6c3d4b.get(_0x123d4e); if (!_0x6e7f8a.data.success) return _0xghi789("❌ Failed to fetch video for \"" + _0x8b9c7d + "\"."); const { download_url: _0x9a8b7c } = _0x6e7f8a.data.result; await _0x123abc.sendMessage(_0xabc123, { 'video': { 'url': _0x9a8b7c }, 'mimetype': "video/mp4" }, { 'quoted': _0x456def }); } catch (_0x1f2g3h) { console.error(_0x1f2g3h); _0xghi789("❌ An error occurred while processing your request."); } }); _0x1a2b3c({ 'pattern': "play4", 'alias': ["song4", "ytplay4"], 'react': '🔃', 'desc': "Download audio from YouTube by searching for keywords.", 'category': "music", 'use': ".playx <keywords>", 'filename': __filename }, async (_0xabc456, _0xdef789, _0xghi123, { from: _0x456abc, args: _0x789def, reply: _0x123ghi }) => { try { const _0x1a2b3c = _0x789def.join(" "); if (!_0x1a2b3c) return _0x123ghi("*Please provide an audio title or URL*"); _0x123ghi("*_Downloading your song please wait..._*"); const _0x3b4c5d = await _0x7f8a90(_0x1a2b3c); if (!_0x3b4c5d.videos || _0x3b4c5d.videos.length === 0x0) return _0x123ghi("❌ No results found for \"" + _0x1a2b3c + "\"."); const _0x5e6f7a = _0x3b4c5d.videos[0x0]; const _0x8c9d0e = _0x5e6f7a.url; const _0x2f3g4h = "https://deliriussapi-oficial.vercel.app/download/ytmp3?url=" + _0x8c9d0e; const _0x7d8e9f = await _0x6c3d4b.get(_0x2f3g4h); if (!_0x7d8e9f.data.success) return _0x123ghi("❌ Failed to fetch audio for \"" + _0x1a2b3c + "\"."); const { download_url: _0x4d5e6f } = _0x7d8e9f.data.result; await _0xabc456.sendMessage(_0x456abc, { 'audio': { 'url': _0x4d5e6f }, 'mimetype': 'audio/mp4', 'ptt': false }, { 'quoted': _0xdef789 }); } catch (_0x1g2h3i) { console.error(_0x1g2h3i); _0x123ghi("❌ An error occurred while processing your request."); } });