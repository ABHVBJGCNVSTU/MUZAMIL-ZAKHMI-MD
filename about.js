/*
created ᴍʀᴍᴜᴢᴀᴍɪʟ/ᴍᴜʙᴀsʜɪʀ ʀᴀᴊᴘᴏᴏᴛ
contact 923198746597
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 Aaslam o Alaikum ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ᴍᴜᴢᴀᴍɪʟ-ᴢᴀᴋʜᴍɪ-ᴍᴅ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ᴍʀ-ᴍᴜᴢᴀᴍɪʟ*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴍ.ᴍᴜᴢᴀᴍɪʟ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴍʀ ᴍᴜᴢᴀᴍɪʟ⁵⁹⁷*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ᴏɴᴇ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • MUZAMIL-ZAKHMI-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴍᴜʙᴀsʜɪʀ ʀᴀᴊᴘᴏᴏᴛ*
*│  ◦* *▢➠ᴍᴜᴢᴀᴍɪʟ ᴋɪɴɢ*
*│  ◦* *▢➠ᴍʀ sʜᴀʙᴀɴ*
*│ 
*│  
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴍᴜᴢᴀᴍɪʟ⁴³²
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
