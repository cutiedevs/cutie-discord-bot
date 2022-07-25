const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Say hello to the bot.'),
	async execute(interaction) {
		await interaction.reply(`Hello ${interaction.user.tag}!`);
	},
};