

const axios = require('axios');
const {
  cmd
} = require('../command');
cmd({
  pattern: "quote",
  desc: "Get a random inspiring quote.",
  category: "fun",
  react: "💬",
  filename: __filename
}, async (conn, mek, m, {
  from,
  reply
}) => {
  try {
    const response = await axios.get('https://api.gifted.my.id/api/fun/quotes?apikey=gifted');
    const quote = response.data;
    return reply(`
💬 "${quote.content}"
- ${quote.author}
*QUOTES BY HANS TZ*
        `);
  } catch (e) {
    console.error("Error fetching quote:", e);
    reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});