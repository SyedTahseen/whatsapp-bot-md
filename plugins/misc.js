const {
	bot,
	// genButtonMessage,
	setVar,
} = require('../lib/')
bot(
	{
		pattern: 'status ?(.*)',
		fromMe: true,
		desc: 'Auto Status view',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match) {
			return await message.send('status on | off')
			// const msg = await genButtonMessage(
			// 	[
			// 		{
			// 			id: `status ${config.AUTO_STATUS_VIEW ? 'off' : 'on'}`,
			// 			text: config.AUTO_STATUS_VIEW ? 'DISABLE' : 'ENABLE',
			// 		},
			// 	],
			// 	`𝗔𝘂𝘁𝗼 𝘀𝘁𝗮𝘁𝘂𝘀 𝘃𝗶𝗲𝘄 𝗺𝗮𝗻𝗮𝗴𝗲𝗿`,
			// 	`Auto Status View ${config.AUTO_STATUS_VIEW ? 'Enabled' : 'Disabled'}`
			// )
			// return await message.send(msg, {}, 'button')
		}
		if (match == 'on' || match == 'off') {
			try {
				await setVar({
					AUTO_STATUS_VIEW: match == 'on' ? 'true' : 'false',
				})
				await message.send(
					`_Auto Status View ${match == 'on' ? 'Enabled' : 'Disabled'}_`
				)
			} catch (error) {
				await message.send(`${error}`, {
					quoted: message.data,
				})
			}
		}
	}
)

bot(
	{
		pattern: 'call ?(.*)',
		fromMe: true,
		desc: 'Auto reject call Manager',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match) {
			return await message.send('call on | off')
			// const msg = await genButtonMessage(
			// 	[
			// 		{
			// 			id: `call ${config.REJECT_CALL ? 'off' : 'on'}`,
			// 			text: config.REJECT_CALL ? 'DISABLE' : 'ENABLE',
			// 		},
			// 	],
			// 	`Auto Reject Call Manager`,
			// 	`Auto Reject ${config.REJECT_CALL ? 'Enabled' : 'Disabled'}`
			// )
			// return await message.send(msg, {}, 'button')
		}
		if (match == 'on' || match == 'off') {
			try {
				await setVar({
					REJECT_CALL: match == 'on' ? 'true' : 'false',
				})
				await message.send(
					`_Auto Call Reject ${match == 'on' ? 'Enabled' : 'Disabled'}_`
				)
			} catch (error) {
				await message.send(`${error}`, {
					quoted: message.data,
				})
			}
		}
	}
)

bot(
	{
		pattern: 'read ?(.*)',
		fromMe: true,
		desc: 'Auto read Message',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match) {
			return await message.send('read on | off')
			// const msg = await genButtonMessage(
			// 	[
			// 		{
			// 			id: `call ${config.REJECT_CALL ? 'off' : 'on'}`,
			// 			text: config.REJECT_CALL ? 'DISABLE' : 'ENABLE',
			// 		},
			// 	],
			// 	`Auto Reject Call Manager`,
			// 	`Auto Reject ${config.REJECT_CALL ? 'Enabled' : 'Disabled'}`
			// )
			// return await message.send(msg, {}, 'button')
		}
		if (match == 'on' || match == 'off') {
			try {
				await setVar({
					SEND_READ: match == 'on' ? 'true' : 'false',
				})
				await message.send(
					`_Auto Read ${match == 'on' ? 'Enabled' : 'Disabled'}_`
				)
			} catch (error) {
				await message.send(`${error}`, {
					quoted: message.data,
				})
			}
		}
	}
)

bot(
	{
		pattern: 'online ?(.*)',
		fromMe: true,
		desc: 'Always Online',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match) {
			return await message.send('online on | off')
			// const msg = await genButtonMessage(
			// 	[
			// 		{
			// 			id: `call ${config.REJECT_CALL ? 'off' : 'on'}`,
			// 			text: config.REJECT_CALL ? 'DISABLE' : 'ENABLE',
			// 		},
			// 	],
			// 	`Auto Reject Call Manager`,
			// 	`Auto Reject ${config.REJECT_CALL ? 'Enabled' : 'Disabled'}`
			// )
			// return await message.send(msg, {}, 'button')
		}
		if (match == 'on' || match == 'off') {
			try {
				await setVar({
					ALWAYS_ONLINE: match == 'on' ? 'true' : 'false',
				})
				await message.send(
					`_Always Online ${match == 'on' ? 'Enabled' : 'Disabled'}_`
				)
			} catch (error) {
				await message.send(`${error}`, {
					quoted: message.data,
				})
			}
		}
	}
)
