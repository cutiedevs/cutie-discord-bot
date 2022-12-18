const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, Client } = require('discord.js');

Client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'verify') {
		const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

		// Add components to modal...

        // Create the text input components
		const studentNumberInput = new TextInputBuilder()
        .setCustomId('studentNumberInput')
        // The label is the prompt the user sees for this input
        .setLabel("Please enter your QUT student number:")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(studentNumberInput);

    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
	}
});